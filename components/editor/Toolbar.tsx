'use client';

import React from 'react';
import { FileText, Box, Calculator, Database, Globe, Save, Download, ZoomIn, ZoomOut, Maximize } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEditorStore } from '@/lib/stores/editorStore';
import { CustomNode } from '@/lib/types/nodes';

interface ToolbarProps {
  onSave?: () => void;
  onExport?: () => void;
  onZoomIn?: () => void;
  onZoomOut?: () => void;
  onFitView?: () => void;
}

const nodeTypes = [
  { type: 'page', label: 'صفحة', icon: FileText, color: 'text-blue-600' },
  { type: 'component', label: 'مكون', icon: Box, color: 'text-green-600' },
  { type: 'computation', label: 'عملية حسابية', icon: Calculator, color: 'text-purple-600' },
  { type: 'database', label: 'قاعدة بيانات', icon: Database, color: 'text-orange-600' },
  { type: 'api', label: 'API', icon: Globe, color: 'text-red-600' },
];

export const Toolbar: React.FC<ToolbarProps> = ({
  onSave,
  onExport,
  onZoomIn,
  onZoomOut,
  onFitView,
}) => {
  const { addNode } = useEditorStore();

  const handleAddNode = (type: string) => {
    const newNode: CustomNode = {
      id: `${type}_${Date.now()}`,
      type,
      position: { x: Math.random() * 400, y: Math.random() * 400 },
      data: {
        id: `${type}_${Date.now()}`,
        label: `${nodeTypes.find(n => n.type === type)?.label} جديد`,
        ...(type === 'page' && {
          name: 'صفحة جديدة',
          route: '/new-page',
          layout: 'default',
          components: [],
          settings: {},
        }),
        ...(type === 'component' && {
          componentType: 'button',
          props: {},
          events: [],
          styles: {},
        }),
        ...(type === 'computation' && {
          name: 'عملية حسابية',
          formula: '',
          inputs: [],
          output: { name: 'result', type: 'number' },
        }),
        ...(type === 'database' && {
          operation: 'select',
          table: '',
          query: '',
          params: {},
        }),
        ...(type === 'api' && {
          url: '',
          method: 'GET',
          headers: {},
          body: null,
        }),
      } as any,
    };
    addNode(newNode);
  };

  return (
    <div className="bg-white border-b border-gray-200 p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-semibold text-gray-800 ml-4">لوحة الأدوات</h2>
          {nodeTypes.map((nodeType) => {
            const Icon = nodeType.icon;
            return (
              <Button
                key={nodeType.type}
                onClick={() => handleAddNode(nodeType.type)}
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
              >
                <Icon className={`w-4 h-4 ${nodeType.color}`} />
                <span>{nodeType.label}</span>
              </Button>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <Button onClick={onZoomIn} variant="outline" size="icon" title="تكبير">
            <ZoomIn className="w-4 h-4" />
          </Button>
          <Button onClick={onZoomOut} variant="outline" size="icon" title="تصغير">
            <ZoomOut className="w-4 h-4" />
          </Button>
          <Button onClick={onFitView} variant="outline" size="icon" title="ملائمة العرض">
            <Maximize className="w-4 h-4" />
          </Button>
          <div className="w-px h-6 bg-gray-300 mx-2" />
          <Button onClick={onSave} variant="outline" size="sm" className="flex items-center gap-2">
            <Save className="w-4 h-4" />
            <span>حفظ</span>
          </Button>
          <Button onClick={onExport} variant="outline" size="sm" className="flex items-center gap-2">
            <Download className="w-4 h-4" />
            <span>تصدير</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
