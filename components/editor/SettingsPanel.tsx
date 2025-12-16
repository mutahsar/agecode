'use client';

import React from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useEditorStore } from '@/lib/stores/editorStore';

interface SettingsPanelProps {
  onClose: () => void;
}

export const SettingsPanel: React.FC<SettingsPanelProps> = ({ onClose }) => {
  const { nodes, selectedNodeId, updateNode } = useEditorStore();
  
  const selectedNode = nodes.find(node => node.id === selectedNodeId);

  if (!selectedNode) {
    return (
      <div className="w-80 bg-white border-l border-gray-200 p-4 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">الإعدادات</h3>
          <Button onClick={onClose} variant="ghost" size="icon">
            <X className="w-4 h-4" />
          </Button>
        </div>
        <p className="text-sm text-gray-500">اختر عقدة لعرض إعداداتها</p>
      </div>
    );
  }

  const handleUpdateField = (field: string, value: string | number | boolean) => {
    updateNode(selectedNode.id, { [field]: value });
  };

  const renderSettings = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data = selectedNode.data as any;
    
    switch (selectedNode.type) {
      case 'page':
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="page-name">اسم الصفحة</Label>
              <Input
                id="page-name"
                value={data.name || ''}
                onChange={(e) => handleUpdateField('name', e.target.value)}
                placeholder="أدخل اسم الصفحة"
              />
            </div>
            <div>
              <Label htmlFor="page-route">المسار</Label>
              <Input
                id="page-route"
                value={data.route || ''}
                onChange={(e) => handleUpdateField('route', e.target.value)}
                placeholder="/page-route"
              />
            </div>
            <div>
              <Label htmlFor="page-layout">التخطيط</Label>
              <select
                id="page-layout"
                value={data.layout || 'default'}
                onChange={(e) => handleUpdateField('layout', e.target.value)}
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm"
              >
                <option value="default">افتراضي</option>
                <option value="full">كامل</option>
                <option value="sidebar">شريط جانبي</option>
              </select>
            </div>
          </div>
        );

      case 'component':
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="component-type">نوع المكون</Label>
              <select
                id="component-type"
                value={data.componentType || 'button'}
                onChange={(e) => handleUpdateField('componentType', e.target.value)}
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm"
              >
                <option value="button">زر</option>
                <option value="form">نموذج</option>
                <option value="table">جدول</option>
                <option value="chart">رسم بياني</option>
                <option value="text">نص</option>
                <option value="image">صورة</option>
                <option value="input">حقل إدخال</option>
                <option value="select">قائمة منسدلة</option>
              </select>
            </div>
          </div>
        );

      case 'computation':
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="comp-name">الاسم</Label>
              <Input
                id="comp-name"
                value={data.name || ''}
                onChange={(e) => handleUpdateField('name', e.target.value)}
                placeholder="اسم العملية"
              />
            </div>
            <div>
              <Label htmlFor="comp-formula">الصيغة</Label>
              <Input
                id="comp-formula"
                value={data.formula || ''}
                onChange={(e) => handleUpdateField('formula', e.target.value)}
                placeholder="مثال: (price * quantity) * 1.15"
                className="font-mono text-sm"
              />
            </div>
          </div>
        );

      case 'database':
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="db-operation">العملية</Label>
              <select
                id="db-operation"
                value={data.operation || 'select'}
                onChange={(e) => handleUpdateField('operation', e.target.value)}
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm"
              >
                <option value="select">استعلام</option>
                <option value="insert">إضافة</option>
                <option value="update">تحديث</option>
                <option value="delete">حذف</option>
              </select>
            </div>
            <div>
              <Label htmlFor="db-table">الجدول</Label>
              <Input
                id="db-table"
                value={data.table || ''}
                onChange={(e) => handleUpdateField('table', e.target.value)}
                placeholder="اسم الجدول"
              />
            </div>
            <div>
              <Label htmlFor="db-query">الاستعلام</Label>
              <textarea
                id="db-query"
                value={data.query || ''}
                onChange={(e) => handleUpdateField('query', e.target.value)}
                placeholder="SELECT * FROM table"
                className="flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm font-mono"
              />
            </div>
          </div>
        );

      case 'api':
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="api-method">الطريقة</Label>
              <select
                id="api-method"
                value={data.method || 'GET'}
                onChange={(e) => handleUpdateField('method', e.target.value)}
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm"
              >
                <option value="GET">GET</option>
                <option value="POST">POST</option>
                <option value="PUT">PUT</option>
                <option value="DELETE">DELETE</option>
                <option value="PATCH">PATCH</option>
              </select>
            </div>
            <div>
              <Label htmlFor="api-url">الرابط</Label>
              <Input
                id="api-url"
                value={data.url || ''}
                onChange={(e) => handleUpdateField('url', e.target.value)}
                placeholder="https://api.example.com/endpoint"
              />
            </div>
          </div>
        );

      default:
        return <p className="text-sm text-gray-500">لا توجد إعدادات متاحة</p>;
    }
  };

  return (
    <div className="w-80 bg-white border-l border-gray-200 p-4 shadow-lg overflow-y-auto">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">إعدادات العقدة</h3>
        <Button onClick={onClose} variant="ghost" size="icon">
          <X className="w-4 h-4" />
        </Button>
      </div>

      <div className="mb-4 p-3 bg-gray-50 rounded-md">
        <p className="text-sm font-semibold text-gray-700">{selectedNode.data.label}</p>
        <p className="text-xs text-gray-500">النوع: {selectedNode.type}</p>
      </div>

      {renderSettings()}
    </div>
  );
};
