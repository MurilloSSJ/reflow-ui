type RunsIndicatorProps = {
    runs: number
    status: "success" | "failed" | "running"
}

export const RunsIndicator = ({ runs, status }: RunsIndicatorProps) => {
    const borderColor = runs > 0 ? status == "success" ? "border-green-800" : status == "failed" ? "border-red-500": "border-green-500" : "border-gray-500"
    const borderColorFailed = runs > 0 ? "border-red-500" : "border-gray-500"
    return (
        <div className="">
            <span className={`rounded-full h-8 w-8 flex items-center justify-center border-2 ${borderColor} font-light p-1 text-2xs text-gray-400`}>{runs}</span>
        </div>
    );
}