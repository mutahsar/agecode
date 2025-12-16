import React, { memo } from 'react';
import { Handle, Position, NodeProps } from 'reactflow';
import { FileText } from 'lucide-react';
import { PageNodeData } from '@/lib/types/nodes';

const PageNode = memo(({ data, selected }: NodeProps<PageNodeData>) => {
  return (
    <div
      className={`px-4 py-2 shadow-md rounded-md bg-white border-2 min-w-[200px] ${
        selected ? 'border-blue-500' : 'border-gray-300'
      }`}
    >
      <Handle type="target" position={Position.Top} className="w-3 h-3" />
      
      <div className="flex items-center gap-2">
        <FileText className="w-5 h-5 text-blue-600" />
        <div className="flex-1">
          <div className="text-sm font-bold text-gray-800">{data.label}</div>
          <div className="text-xs text-gray-500">{data.route || '/page'}</div>
        </div>
      </div>
      
      {data.name && (
        <div className="mt-2 text-xs text-gray-600">
          <div className="font-semibold">Page: {data.name}</div>
          <div>Layout: {data.layout}</div>
        </div>
      )}
      
      <Handle type="source" position={Position.Bottom} className="w-3 h-3" />
    </div>
  );
});

PageNode.displayName = 'PageNode';

export default PageNode;
