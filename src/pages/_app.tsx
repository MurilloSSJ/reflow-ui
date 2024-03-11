import "@/styles/globals.css";
import 'reactflow/dist/style.css';
import type { AppProps } from "next/app";
import { Sidebar } from "@/components/sidebar";

export default function App({ Component, pageProps }: AppProps) {

  return (
    <div className="relative flex">
      <Sidebar />
      <div className="flex flex-col w-full px-20">
        <Component {...pageProps} />
      </div>
    </div>

  )
}
