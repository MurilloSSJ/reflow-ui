import { GradientButton } from "@/components/gradient_button"
import { Input } from "@/components/input"
import { K2D } from "next/font/google"
import { FaUser } from "react-icons/fa"
import { FaLock } from "react-icons/fa";
import Image from "next/image";
const k2d = K2D({ weight: '800', subsets: ['latin'] })

export const Login = () => {
    return (
        <div className="flex flex-col self-center justify-self-center card_surface_background px-20 py-10 justify-center items-center gap-y-10 relative z-20">
            <div className="flex flex-col gap-y-5 z-20">
                <Input label="Your Username" Icon={FaUser} placeholder="Ex: admin"/>
                <Input label="Your Password" Icon={FaLock} placeholder="Ex: reflowIsCool"/>
                <GradientButton label="Login" />
            </div>
        </div>
    )
}