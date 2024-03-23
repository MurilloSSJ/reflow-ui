import { useState } from "react";
import { FaPowerOff } from "react-icons/fa6";
type ToggleProps = {
    label?: string
    checked: boolean
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    size?: number
}

export const Toggle = ({ label, checked, onChange, size }: ToggleProps) => {
    const [checkedToogle, setChecked] = useState<boolean>(checked)
    const handleToggle = (event: any) => {
        setChecked(!checkedToogle)
        onChange(event)
    }
    return (
        <div className="flex items-center gap-x-5 justify-center">
            {label && <span>{label}</span>}
            {<FaPowerOff className={`text-2xl ${checkedToogle ? "text-lime-500": "text-red-500"} hover:cursor-pointer`} onClick={handleToggle}/>}
        </div>
    );
}