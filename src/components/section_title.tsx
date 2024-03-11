import { K2D } from "next/font/google";

const k2d = K2D({ weight: '800', subsets: ['latin'] });

type SectionTitleProps = {
    title: string
}

export const SectionTitle = ({ title }: SectionTitleProps) => {
    return (
        <h2 className={`${k2d.className}`}>{title}</h2>
    )
}