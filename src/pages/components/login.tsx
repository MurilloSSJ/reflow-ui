import { GradientButton } from "@/components/gradient_button"
import { Input } from "@/components/input"
import { K2D } from "next/font/google"
import { FaUser } from "react-icons/fa"
import { FaLock } from "react-icons/fa";
import { useForm } from 'react-hook-form'
import { loginSchema, loginTypeSchema } from "@/schemas/login";
import { zodResolver } from '@hookform/resolvers/zod'
import { authAPI } from "@/services/auth";
import { toast } from "react-toastify";
import { IoRocket } from "react-icons/io5";
import { ImCrying } from "react-icons/im";
import { setCookie } from 'nookies'
import Router from 'next/router'

const k2d = K2D({ weight: '800', subsets: ['latin'] })

export const Login = () => {
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        reset,
        formState: { errors, isSubmitting },
      } = useForm<loginTypeSchema>({
        resolver: zodResolver(loginSchema),
      })
    const handleLogin = async (data: loginTypeSchema) => {
        try{
            const response = await authAPI.login(data)
            toast.success('Login successful', {position: 'top-right', icon: IoRocket})
            setCookie(undefined, 'token', response, {
                maxAge: 60 * 60 * 24, // 24horas
            })
            Router.push('/dags')
        } catch (error) {
            toast.error('Invalid credentials', {position: 'top-right', icon: ImCrying})
        }
    }
    return (
        <div className="flex flex-col self-center justify-self-center card_surface_background px-20 py-10 justify-center items-center gap-y-10 relative z-20">
            <div className="flex flex-col gap-y-5 z-20">
            <form onSubmit={handleSubmit(handleLogin)} className="flex flex-col gap-y-5 z-20">
                <Input label="Your Username" Icon={FaUser} placeholder="Ex: admin" register={register} id="username" errors={errors.username?.message}/>
                <Input label="Your Password" Icon={FaLock} placeholder="Ex: reflowIsCool" register={register} id="password" errors={errors.username?.message}/>
                <GradientButton label="Login"/>
            </form>
            </div>
        </div>
    )
}