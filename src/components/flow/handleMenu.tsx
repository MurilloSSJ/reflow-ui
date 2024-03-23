import { TaskNode } from "./nodes/tasks"
import { FaObjectGroup } from "react-icons/fa";
import { K2D, Inter } from "next/font/google"
import { IoTerminalSharp, IoLogoPython } from "react-icons/io5";

const inter = Inter({ subsets: ['latin'] });
const k2d = K2D({ weight: '800', subsets: ['latin'] });
export const HandleMenu = () => {
    return (
        <div className="fixed left-0 px-10 flex flex-col gap-y-10 pt-10 shadow-md h-screen z-10 bg-white">
            <div className="flex flex-col gap-y-2">
                <span className={`${k2d.className} text-sm`}>Design Elements</span>
                <div className="rounded px-4 py-1 text-center flex items-center gap-x-3 border-2 border-slate-300" draggable>
                    <FaObjectGroup className="text-lg text-primmary-100" />
                    <span className={`text-sm ${inter.className} font-bold`}>Task Group</span>
                </div>
            </div>
            <div className="flex flex-col gap-y-2">
                <span className={`${k2d.className} text-sm`}>Basic Operators</span>
                <div className="rounded px-4 py-1 text-center flex items-center gap-x-3 border-2 border-slate-300" draggable>
                    <IoTerminalSharp className="text-lg text-primmary-100" />
                    <span className={`text-sm ${inter.className} font-bold`}>Bash Operator</span>
                </div>
                <div className="rounded px-4 py-1 text-center flex items-center gap-x-3 border-2 border-slate-300" draggable>
                    <IoLogoPython className="text-lg text-primmary-100" />
                    <span className={`text-sm ${inter.className} font-bold`}>Python Operator</span>
                </div>
            </div>
            
        </div>
    )
}