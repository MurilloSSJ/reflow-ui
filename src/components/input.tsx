import { K2D } from "next/font/google"
import { InputHTMLAttributes } from "react";
import InputMask from 'react-input-mask'
import { IconType } from "react-icons";
const k2d = K2D({ weight: '600', subsets: ['latin'] })

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    id: string
    type?: string
    mask?: string | string[]
    defaultValue?: any
    required?: boolean
    errors?: string
    name?: string
    min?: number
    max?: number
    register: any
    label?: string
    Icon?: IconType
    placeholder?: string
}

export const Input = ({ label, Icon, placeholder, id, mask, min, max, type, register, errors, defaultValue, ...rest }: InputProps) => {
    console.log(errors)
    const InputElement = mask ? (
        <InputMask
            mask={mask}
            formatChars={{
                '9': '[0-9]',
                a: '[A-Za-z]',
                A: '[A-Z]',
                '*': '[A-Za-z0-9]',
                '?': '^[0-9]?$',
            }}
            maskChar=""
            // guide={false}
            type={type}
            placeholder={placeholder}
            min={min}
            max={max}
            {...rest}
            {...register(`${id}`)}
            className={errors ? 'error' : ''}
            defaultValue={defaultValue}
        >
            {(inputProps: any) => (
                <input 
                    type="text" 
                    className={`rounded px-8 py-2 focus:outline-none focus:border-primmary-500 relative ${errors ? 'bg-red-200' : ''}`}
                    style={{ color: "#121212" }} 
                    placeholder={placeholder || ""}
                    {...inputProps}
                    {...register(`${id}`)}
                />
            )}
        </InputMask>
        ) : (
        <input
            type={type}
            className={`rounded px-8 py-2 focus:outline-none focus:border-primmary-500 relative ${errors ? 'bg-red-200' : ''}`}
            style={{ color: "#121212" }} 
            placeholder={placeholder || ""}
            min={min}
            max={max}
            {...rest}
            {...register(`${id}`)}
            defaultValue={defaultValue}
        />
        )
    return (
        <div className="flex flex-col gap-y-3 relative">
            {label && <label htmlFor="input" className={`${k2d.className} font-lg text-primmary-100`}>{label}</label>}
            {Icon && <Icon className="absolute inset-y-12 left-2 z-10 text-primmary-100" />}
            {InputElement}
        </div>
    )
}