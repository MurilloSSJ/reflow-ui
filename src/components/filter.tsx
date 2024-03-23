import { BsFilterCircleFill } from "react-icons/bs";
import { Inter } from "next/font/google";
import { IoCloseCircle } from "react-icons/io5";
const inter = Inter({ subsets: ["latin"], weight: "400" });
export const Filter = () => {
    return (
        <div className={`flex items-center w-full gap-x-5 ${inter.className}`}>
            <div className={`flex items-center w-full gap-x-5 ${inter.className} grow`}>
                <span>Filter By</span>
                <div className="flex flex-row items-center gap-x-2 p-2 rounded-full cursor-pointer">
                    <IoCloseCircle className="text-xl text-red-300"/>
                    <span className="text-sm">Status</span>
                </div>
                <div className="flex flex-row items-center gap-x-2 cursor-pointer">
                    <IoCloseCircle className="text-xl text-red-300"/>
                    <span className="text-sm">Last Run</span>
                </div>
            </div>
            <div className="flex items-center gap-x-2">
                <BsFilterCircleFill className="text-3xl text-primmary-100"/>
            </div>
        </div>
    )
}