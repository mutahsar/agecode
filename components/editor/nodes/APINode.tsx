import React, { memo } from 'react';
import { Handle, Position, NodeProps } from 'reactflow';
import { Globe } from 'lucide-react';
import { APINodeData } from '@/lib/types/nodes';

const APINode = memo(({ data, selected }: NodeProps<APINodeData>) => {
  return (
    <div
      className={`px-4 py-2 shadow-md rounded-md bg-white border-2 min-w-[200px] ${
        selected ? 'border-red-500' : 'border-gray-300'
      }`}
    >
      <Handle type="target" position={Position.Top} className="w-3 h-3" />
      
      <div className="flex items-center gap-2">
        <Globe className="w-5 h-5 text-red-600" />
        <div className="flex-1">
          <div className="text-sm font-bold text-gray-800">{data.label}</div>
          <div className="text-xs text-gray-500">{data.method}</div>
        </div>
      </div>
      
      {data.url && (
        <div className="mt-2 text-xs text-gray-600">
          <div className="font-semibold">URL:</div>
          <div className="truncate font-mono bg-gray-50 p-1 rounded">
            {data.url}
          </div>
        </div>
      )}
      
      <Handle type="source" position={Position.Bottom} className="w-3 h-3" />
    </div>
  );
});

APINode.displayName = 'APINode';

export default APINode;
