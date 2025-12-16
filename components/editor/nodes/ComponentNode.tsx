import React, { memo } from 'react';
import { Handle, Position, NodeProps } from 'reactflow';
import { Box } from 'lucide-react';
import { ComponentNodeData } from '@/lib/types/nodes';

const ComponentNode = memo(({ data, selected }: NodeProps<ComponentNodeData>) => {
  return (
    <div
      className={`px-4 py-2 shadow-md rounded-md bg-white border-2 min-w-[180px] ${
        selected ? 'border-green-500' : 'border-gray-300'
      }`}
    >
      <Handle type="target" position={Position.Top} className="w-3 h-3" />
      
      <div className="flex items-center gap-2">
        <Box className="w-5 h-5 text-green-600" />
        <div className="flex-1">
          <div className="text-sm font-bold text-gray-800">{data.label}</div>
          <div className="text-xs text-gray-500 capitalize">{data.componentType}</div>
        </div>
      </div>
      
      {data.props && Object.keys(data.props).length > 0 && (
        <div className="mt-2 text-xs text-gray-600">
          <div className="font-semibold">Props:</div>
          <div className="max-h-20 overflow-auto">
            {Object.entries(data.props).slice(0, 3).map(([key, value]) => (
              <div key={key} className="truncate">
                {key}: {String(value).substring(0, 20)}
              </div>
            ))}
          </div>
        </div>
      )}
      
      <Handle type="source" position={Position.Bottom} className="w-3 h-3" />
    </div>
  );
});

ComponentNode.displayName = 'ComponentNode';

export default ComponentNode;
