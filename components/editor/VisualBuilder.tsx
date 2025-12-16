'use client';

import React, { useCallback, useState } from 'react';
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  Panel,
  useReactFlow,
} from 'reactflow';
import 'reactflow/dist/style.css';

import { useEditorStore } from '@/lib/stores/editorStore';
import { Toolbar } from './Toolbar';
import { SettingsPanel } from './SettingsPanel';

import PageNode from './nodes/PageNode';
import ComponentNode from './nodes/ComponentNode';
import ComputationNode from './nodes/ComputationNode';
import DatabaseNode from './nodes/DatabaseNode';
import APINode from './nodes/APINode';

const nodeTypes = {
  page: PageNode,
  component: ComponentNode,
  computation: ComputationNode,
  database: DatabaseNode,
  api: APINode,
};

export const VisualBuilder: React.FC = () => {
  const [showSettings, setShowSettings] = useState(false);
  const reactFlowInstance = useReactFlow();
  
  const {
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
    onConnect,
    setSelectedNodeId,
  } = useEditorStore();

  const handleNodeClick = useCallback((_event: React.MouseEvent, node: any) => {
    setSelectedNodeId(node.id);
    setShowSettings(true);
  }, [setSelectedNodeId]);

  const handlePaneClick = useCallback(() => {
    setSelectedNodeId(null);
  }, [setSelectedNodeId]);

  const handleSave = () => {
    const flow = reactFlowInstance.toObject();
    console.log('Saving project:', flow);
    // TODO: Implement save to API
    alert('المشروع تم حفظه بنجاح!');
  };

  const handleExport = () => {
    const flow = reactFlowInstance.toObject();
    const dataStr = JSON.stringify(flow, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
    const exportFileDefaultName = 'project.json';

    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const handleZoomIn = () => {
    reactFlowInstance.zoomIn();
  };

  const handleZoomOut = () => {
    reactFlowInstance.zoomOut();
  };

  const handleFitView = () => {
    reactFlowInstance.fitView();
  };

  return (
    <div className="w-full h-screen flex flex-col">
      <Toolbar
        onSave={handleSave}
        onExport={handleExport}
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onFitView={handleFitView}
      />
      
      <div className="flex-1 flex">
        <div className="flex-1 relative">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onNodeClick={handleNodeClick}
            onPaneClick={handlePaneClick}
            nodeTypes={nodeTypes}
            fitView
            className="bg-gray-50"
          >
            <Background />
            <Controls />
            <MiniMap 
              nodeColor={(node) => {
                switch (node.type) {
                  case 'page': return '#3b82f6';
                  case 'component': return '#10b981';
                  case 'computation': return '#8b5cf6';
                  case 'database': return '#f97316';
                  case 'api': return '#ef4444';
                  default: return '#6b7280';
                }
              }}
              className="bg-white border border-gray-300"
            />
            <Panel position="top-center" className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-md shadow-md">
              <div className="text-sm font-medium text-gray-700">
                محرر بناء المواقع المرئي
              </div>
            </Panel>
          </ReactFlow>
        </div>
        
        {showSettings && (
          <SettingsPanel onClose={() => setShowSettings(false)} />
        )}
      </div>
    </div>
  );
};
