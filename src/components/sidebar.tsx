import Image from "next/image"
import { GoWorkflow } from "react-icons/go";
import { GoProjectTemplate } from "react-icons/go";
import { K2D } from "next/font/google";

const k2d = K2D({weight: "500", subsets: ['latin'] });
export const Sidebar = () => {
    return (
        <div className="sticky h-screen w-fit flex flex-col gap-y-4 px-5 py-10 flex flex-col gap-y-20 shadow-2xl">
            <Image
                src="/logo_black.svg"
                alt="Reflow"
                width={100}
                height={24}
                priority
            />
            <div>
                <div className={`flex flex-col gap-y-2 items-start justify-start gap-y-6 ${k2d.className} w-full`}>
                    <div className="flex justify-center items-center rounded bg-primmary-100 px-8 py-2 w-full">
                        <GoWorkflow className="text-2xl text-white font-bold"/>
                        <button className="rounded px-2 focus:outline-none text-white font-bold">
                            DAGs
                        </button>
                    </div>
                    <div className="flex justify-center items-center rounded px-8 py-2 w-full">
                        <GoProjectTemplate className="text-2xl"/>
                        <button className="rounded px-2 focus:outline-none ">
                            Templates
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}