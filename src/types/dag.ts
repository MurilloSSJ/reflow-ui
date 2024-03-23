export type Dag  = {
    name: string
    taskInstances: {
        running: number
        failed: number
        success: number
    }
    runs: number 
    schedule: string
    lastRun: string 
    nextRun: string
    active: boolean
    owners: string[]
    principalLanguage: "golang" | "python"
}