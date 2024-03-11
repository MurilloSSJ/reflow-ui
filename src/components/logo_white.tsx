import Image from "next/image";

type LogoWhiteProps = {
    width?: number;
    height?: number;
}

export const LogoWhite = ({ width, height }: LogoWhiteProps) => {
    return (
        <Image
            src="/logo_black.svg"
            alt="Reflow Logo"
            width={width || 100}
            height={height || 24}
            priority
        />
    )
}
