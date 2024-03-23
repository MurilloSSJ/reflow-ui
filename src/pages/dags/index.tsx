import { Tab } from "@/components/tab";
import { useState } from "react";
import { TabItemProps } from "@/components/tab";
import { TableItemProps } from "@/components/table";
import { Table } from "@/components/table";
import { SectionTitle } from "@/components/sectionTitle";
import { RunsIndicator } from "@/components/runsIndicator";
import { GetServerSideProps } from "next";
import { Dag } from "@/types/dag";
import Switch from "@/components/switch";
import { Filter } from "@/components/filter";
import { SearchComponent } from "@/components/searchComponent";
import { Inter } from "next/font/google";
import { TbBrandGolang } from "react-icons/tb";
import { LiaPython } from "react-icons/lia";
import { IoPlay } from "react-icons/io5";
import { IoTrash } from "react-icons/io5";
import { IoPencil } from "react-icons/io5";
import { IoDownload } from "react-icons/io5";
import { AddButton } from "@/components/addButton";
import Router  from "next/router";
type DagPageProps = {
    dagData: Dag[]
}

const inter = Inter({ subsets: ["latin"]});

export default function DagPage({dagData}: DagPageProps) {

    const [filterActivityTab, setFilterActivityTab] = useState<TabItemProps[]>([
        { title: "All", active: true, onClick: (index) => handleUpdateFilterActivityTab(index) },
        { title: "Active", active: false, onClick: (index) => handleUpdateFilterActivityTab(index) },
        { title: "Paused", active: false, onClick: (index) => handleUpdateFilterActivityTab(index) }])
    const [dags, setDags] = useState<TableItemProps[]>(dagData.map((dag, index) => {
        return { row: 
            [
            <Switch checked={dag.active} onChange={() => {}}/>,
            <div>
                {dag.principalLanguage === "golang" ? <TbBrandGolang className="text-primmary-800 text-3xl"/> :
                <LiaPython className="text-primmary-800 text-3xl"/>}
            </div>,
            <span className={`${inter.className} font-normal`}>{dag.name}</span>,
            <div className="flex gap-x-2 flex-wrap">
                <RunsIndicator status="success" runs={dag.taskInstances.success}/>
                <RunsIndicator status="failed" runs={dag.taskInstances.failed}/>
                <RunsIndicator status="running" runs={dag.taskInstances.running}/>
            </div>,
            <div className="flex gap-2 flex-wrap">
                {dag.owners?.map((owner, index) => {
                    return <span key={index} className={`${inter.className} bg-primmary-500 cursor-pointer text-sm rounded-full px-2 py-.3`}>{owner}</span>
                })}
            </div>,
            <span className={`${inter.className} text-normal`}>{dag.schedule}</span>, 
            <span className={`${inter.className} text-primmary-800 cursor-pointer text-normal `}>{dag.lastRun}</span>,
            <span className={`${inter.className} text-normal`}>{dag.nextRun}</span>,
            <div className="flex gap-x-1">
                <span className="rounded p-1 bg-green-600"><IoPlay className="text-white text-xl cursor-pointer"/></span>
                <span className="rounded p-1 bg-red-600"><IoTrash className="text-white text-xl cursor-pointer"/></span>
                <span className="rounded p-1 bg-primmary-100"><IoPencil className="text-white text-xl cursor-pointer"/></span>
                <span className="rounded p-1 bg-blue-600"><IoDownload className="text-white text-xl cursor-pointer"/></span>
            </div>
        ] }
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
        <div className="flex w-full flex-col mt-10">
            <SectionTitle title="Dags" subtitle="Here, you can see all dags created in code or in webapp"/>
            <SearchComponent />
            <Filter />
            <Table header={["", "CO", "DAG", "Runs","Owners", "Schedule", "Last Run", "Next Run", "Actions"]} tableItems={dags} />
            <div className="fixed bottom-20 right-40">
                <AddButton onClick={() => {Router.push("/dags/new")}}/>
            </div>
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
            owners: ["owner1", "reflow"],
            lastRun: "2024-01-01 00:00:00", 
            nextRun: "2024-01-02 00:00:00" 
        },
        { 
            name: "dag2", 
            status: "paused",
            taskInstances: {"running": 20, "failed": 0, "success": 10},
            owners: ["owner1", "owner2"],
            schedule: "* * * * *", 
            lastRun: "2024-01-01 00:00:00", 
            nextRun: "2024-01-02 00:01:00",
            principalLanguage: "golang"
        },
        { 
            name: "dag3", 
            status: "active", 
            taskInstances: {"running": 20, "failed": 0, "success": 10}, 
            schedule: "0 30 * * *", 
            lastRun: "2024-01-01 00:30:00", 
            nextRun: "2024-01-02 00:30:00",
            principalLanguage: "python"
        },
        { name: "dag4", status: "paused",taskInstances: {"running": 20, "failed": 0, "success": 10},  runs: 365, schedule: "Dataset = s3Origin", lastRun: "1", nextRun: "1" }
    ] }}
}