import { Handle, Position } from 'reactflow';
import { K2D, Inter } from 'next/font/google';
import { LiaPython } from "react-icons/lia";
const k2d = K2D({ weight: '800', subsets: ['latin'] });
const inter = Inter({ subsets: ["latin"] });
export const TaskNode = () => {
    return (
        <>
        <Handle type="target" position={Position.Left} className='w-16 h-16 rounded'/>
        <Handle type="source" position={Position.Right} id="a"/>
        <div className='rounded flex flex-col p-2 border border-black'>
            <div className='flex items-center gap-x-2 border-b'>
                <LiaPython className='text-3xl text-primmary-100'/>
                <span className={`${inter.className} font-bold`}>Python Operator</span>
            </div>
            <h3 className={`${k2d.className} text-lg text-primmary-800 mb-2`}>send_push_messages</h3>
            <p className={`${inter.className}`}><span className={`${k2d.className} bg-primmary-100 rounded px-2 mr-2`}>Call</span>send_push_messages</p>
        </div>
        </>
    )
}