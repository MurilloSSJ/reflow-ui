import DateTime from "./datetime"
import { LogoWhite } from "./logo_white"

export const NavHeader = () => {
    return (
        <header className="flex items-center justify-between font-mono text-sm w-screen mb-5 py-4 px-10">
            <LogoWhite />
            <div>
                <span className="text-primmary-100">Read the docs</span>
            </div>
        </header>
    )
}