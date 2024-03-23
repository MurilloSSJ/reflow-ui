import "@/styles/globals.css";
import 'reactflow/dist/style.css';
import type { AppProps } from "next/app";
import { Sidebar } from "@/components/sidebar";
import { useRouter } from 'next/router'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter()
  const isAuthRoute = asPath === '/' || asPath.startsWith('/auth') || asPath.startsWith('/dags/new')
  return (
    <div className="relative flex">
      { !isAuthRoute && <Sidebar />}
      <div className="flex flex-col w-full px-20">
        <Component {...pageProps} />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          draggable={false}
          closeOnClick
          pauseOnHover
          />
      </div>
    </div>

  )
}
