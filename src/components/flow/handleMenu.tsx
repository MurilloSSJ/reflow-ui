import { TaskNode } from "./nodes/tasks"

export const HandleMenu = () => {
    return (
        <div className="fixed inset-y-2/4 right-10 card_surface_background flex flex-col gap-y-4">
            Insert new items here
            <div className="rounded border px-4 py-2 text-center text-primmary-500 hover:border-primmary-500 hover:cursor-grab" draggable>@Task</div>
            <div className="roundedd border px-4 py-2 text-center border-primmary-100" draggable>TaskGroup</div>
        </div>
    )
}