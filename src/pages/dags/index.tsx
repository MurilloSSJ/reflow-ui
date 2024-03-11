import { Tab } from "@/components/tab";
import { useState } from "react";
import { TabItemProps } from "@/components/tab";
import { TableItemProps } from "@/components/table";
import { Table } from "@/components/table";
import { SectionTitle } from "@/components/section_title";
import { Toggle } from "@/components/toggle";
import { RunsIndicator } from "@/components/runsIndicator";
import { GetServerSideProps } from "next";
import { Dag } from "@/types/dag";

type DagPageProps = {
    dagData: Dag[]
}

export default function DagPage({dagData}: DagPageProps) {

    const [filterActivityTab, setFilterActivityTab] = useState<TabItemProps[]>([
        { title: "All", active: true, onClick: (index) => handleUpdateFilterActivityTab(index) },
        { title: "Active", active: false, onClick: (index) => handleUpdateFilterActivityTab(index) },
        { title: "Paused", active: false, onClick: (index) => handleUpdateFilterActivityTab(index) }])
    const [dags, setDags] = useState<TableItemProps[]>(dagData.map((dag, index) => {
        return { row: 
            [
            <Toggle checked={dag.active} onChange={() => {}}/>, 
            dag.name,
            <div className="flex gap-x-2">
                <RunsIndicator status="success" runs={dag.taskInstances.success}/>
                <RunsIndicator status="failed" runs={dag.taskInstances.failed}/>
                <RunsIndicator status="running" runs={dag.taskInstances.running}/>
            </div>, 
            dag.schedule, 
            dag.lastRun,
            dag.nextRun] }
    }))
    const handleUpdateFilterActivityTab = (index: number) => {
        filterActivityTab.forEach((tabItem, i) => {
            if (i === index) {
                tabItem.active = true
            } else {
                tabItem.active = false
            }
        })
        const newFilterActivityTab = filterActivityTab.slice(0)
        console.log(filterActivityTab)
        setFilterActivityTab(newFilterActivityTab)
    }
    return (
        <div className="flex w-full flex-col">

            <SectionTitle title="DAGs"/>
            <Toggle checked={false} onChange={() => {}}/>
            <Tab tabItems={filterActivityTab} />
            <Table header={["Status", "DAG", "Runs", "Schedule", "Last Run", "Next Run", "Actions"]} tableItems={dags} />
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    return { props: {dagData: [
        { 
            name: "dag1",
            active: true,
            taskInstances: {"running": 250, "failed": 300, "success": 120}, 
            schedule: "0 0 * * *", 
            lastRun: "2024-01-01 00:00:00", 
            nextRun: "2024-01-02 00:00:00" 
        },
        { 
            name: "dag2", 
            status: "paused",
            taskInstances: {"running": 20, "failed": 0, "success": 10}, 
            schedule: "* * * * *", 
            lastRun: "2024-01-01 00:00:00", 
            nextRun: "2024-01-02 00:01:00" 
        },
        { 
            name: "dag3", 
            status: "active", 
            taskInstances: {"running": 20, "failed": 0, "success": 10}, 
            schedule: "0 30 * * *", 
            lastRun: "2024-01-01 00:30:00", 
            nextRun: "2024-01-02 00:30:00" 
        },
        { name: "dag4", status: "paused",taskInstances: {"running": 20, "failed": 0, "success": 10},  runs: 365, schedule: "Dataset = s3Origin", lastRun: "1", nextRun: "1" }
    ] }}
}