import { K2D, Inter } from "next/font/google";
const k2d = K2D({ subsets: ["latin"], weight: "700" });
const inter = Inter({ subsets: ["latin"], weight: "500" });
type SectionTitleProps = {
    title: string
    subtitle?: string
}

export const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
    return (
        <div className="flex flex-col gap-y-2 mb-10">
            <h1 className={`text-3xl font-bold ${k2d.className}`}>{title}</h1>
            {subtitle && <p className="text-base font-normal text-gray-500">{subtitle}</p>}
        </div>
    );
}