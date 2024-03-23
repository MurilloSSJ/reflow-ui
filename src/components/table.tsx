import { K2D } from "next/font/google"
import { Inter } from "next/font/google"
import React from "react"

export type TableItemProps = {
    row: React.ReactNode[]
    onClick?: (index: number) => void
}

type TableProps = {
    title?: string
    header: string[]
    tableItems: TableItemProps[]
}

const k2d = K2D({ weight: '800', subsets: ['latin'] })
const inter = Inter({ subsets: ["latin"] });

export const Table = ({ title, header, tableItems }: TableProps) => {
    return (
        <div className="w-full flex mt-5 rounded">
            <table className="w-full table-auto self-center justify-self-center py-20 rounded">
                <thead className="text-left card_surface_background rounded">
                    <tr>
                        {header.map((headerItem, index) => {
                            return (
                                <th key={index} className={`px-4 py-2 ${k2d.className} text-slate-500`}>{headerItem}</th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody>
                    {tableItems.map((tableItem, index) => {
                        return (
                            <tr key={index} onClick={() => tableItem.onClick && tableItem.onClick(index)} className={`table_surface_background ${inter.className} rounded w-fit`}>
                                {tableItem.row.map((rowItem, index) => {
                                    return (
                                        <td key={index} className="px-4 py-2">{rowItem}</td>
                                    )
                                })}
                            </tr>
                        )
                    }
                    )}
                </tbody>
            </table>
        </div>
    );
}