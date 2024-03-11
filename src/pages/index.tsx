import { Inter } from "next/font/google";
import { NavHeader } from "../components/header";
import { Login } from "./components/login";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen min-w-screen flex-col items-center ${inter.className} bg-light-200`}
    >
      <NavHeader />
      <div className="flex self-center justify-self-center grow justify-center items-center">
        <div className="relative px-40 py-20">
        <Image
                className="absolute z-0 top-0 right-0 animate-spin-slow"
                src="/blob.svg"
                alt="Blob animating"
                width={300}
                height={100}
                priority
        />
        <Image
                className="absolute z-0 bottom-0 left-0 animate-spin-slow"
                src="/blob.svg"
                alt="Blob animating"
                width={300}
                height={100}
                priority
        />
        <div className="flex rounded shadow-2xl h-fit relative mx-auto">
          <Login />
        </div>
        </div>
      </div>
    </main>
  );
}
