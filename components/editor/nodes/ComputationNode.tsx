import React, { memo } from 'react';
import { Handle, Position, NodeProps } from 'reactflow';
import { Calculator } from 'lucide-react';
import { ComputationNodeData } from '@/lib/types/nodes';

const ComputationNode = memo(({ data, selected }: NodeProps<ComputationNodeData>) => {
  return (
    <div
      className={`px-4 py-2 shadow-md rounded-md bg-white border-2 min-w-[200px] ${
        selected ? 'border-purple-500' : 'border-gray-300'
      }`}
    >
      <Handle type="target" position={Position.Top} className="w-3 h-3" />
      
      <div className="flex items-center gap-2">
        <Calculator className="w-5 h-5 text-purple-600" />
        <div className="flex-1">
          <div className="text-sm font-bold text-gray-800">{data.label}</div>
          <div className="text-xs text-gray-500">Computation</div>
        </div>
      </div>
      
      {data.formula && (
        <div className="mt-2 text-xs text-gray-600">
          <div className="font-semibold">Formula:</div>
          <div className="font-mono bg-gray-50 p-1 rounded truncate">
            {data.formula}
          </div>
        </div>
      )}
      
      {data.output && (
        <div className="mt-1 text-xs text-gray-600">
          <span className="font-semibold">Output:</span> {data.output.name}
        </div>
      )}
      
      <Handle type="source" position={Position.Bottom} className="w-3 h-3" />
    </div>
  );
});

ComputationNode.displayName = 'ComputationNode';

export default ComputationNode;
