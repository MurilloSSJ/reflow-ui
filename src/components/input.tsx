import { K2D } from "next/font/google"
import { IconType } from "react-icons";
import { FaUser } from "react-icons/fa";
const k2d = K2D({ weight: '600', subsets: ['latin'] })

type InputProps = {
    label?: string
    Icon?: IconType
    placeholder?: string
}

export const Input = ({ label, Icon, placeholder }: InputProps) => {
    return (
        <div className="flex flex-col gap-y-3 relative">
            {label && <label htmlFor="input" className={`${k2d.className} font-lg text-primmary-100`}>{label}</label>}
            {Icon && <Icon className="absolute inset-y-12 left-2 z-10 text-primmary-100" />}
            <input type="text" className="rounded px-8 py-2 focus:outline-none focus:border-primmary-500 relative" style={{ color: "#121212" }} placeholder={placeholder || ""}/>
        </div>
    )
}