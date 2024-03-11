import { Handle, Position } from 'reactflow';
import { K2D, Inter } from 'next/font/google';

const k2d = K2D({ weight: '800', subsets: ['latin'] });
const inter = Inter({ subsets: ["latin"] });
export const TaskNode = () => {
    return (
        <>
        <Handle type="target" position={Position.Left} className='w-16 h-16 rounded'/>
        <Handle type="source" position={Position.Right} id="a"/>
        <div className='rounded bg-dark-500 py-2'>
            <h3 className={`${k2d.className} text-lg text-primmary-100`}>Task</h3>
            <p className={`${inter.className}`}>Task description</p>
        </div>
        </>
    )
}