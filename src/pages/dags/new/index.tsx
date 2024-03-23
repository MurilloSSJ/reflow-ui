import { useMemo, useState } from 'react';
import ReactFlow, { Controls, Background } from 'reactflow';
import { TaskNode } from '@/components/flow/nodes/tasks';
import { HandleMenu } from '@/components/flow/handleMenu';
export default function CreateDagPage() {
    const nodeTypes = useMemo(() => ({ taskNode: TaskNode }), []);
    const [nodes, setNodes] = useState([
        {
          id: '1',
          data: { label: 'Hello' },
          position: { x: 0, y: 0 },
          type: 'taskNode',
        },
        {
          id: '2',
          data: { label: 'World' },
          position: { x: 100, y: 100 },
        },
      ])
    const [edges, setEdges] = useState([
        { id: '1-2', source: '1', target: '2', label: 'to the', type: 'step' },
      ])
    return (
        <div className='w-screen h-screen relative'>
            <HandleMenu />
            <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes}>
                <Background className='bg-slate-50'/>
                <Controls/>
            </ReactFlow>
        </div>
    )
}