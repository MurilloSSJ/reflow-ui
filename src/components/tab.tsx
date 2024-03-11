import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] });

export type TabItemProps = {
    title: string
    active: boolean
    onClick?: (index: number) => void
}

type TabProps = {
    title?: string
    tabItems: TabItemProps[]
}
export const Tab = ({ title, tabItems }: TabProps) => {
    return (
        <div className="flex flex-col">
            {title && <h1>{title}</h1>}
            <div className="flex gap-x-3 card_surface_background rounded w-fit">
                {tabItems.map((tabItem, index) => {
                    return (
                        <button
                            key={index}
                            className={`rounded px-5 py-2 focus:outline-none hover:bg-primmary-500 ${tabItem.active ? "bg-primmary-100 font-bold" : ""}`}
                            onClick={() => tabItem.onClick && tabItem.onClick(index)}
                        >
                            {tabItem.title}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}   