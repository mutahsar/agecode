'use client';

import React from 'react';
import { ReactFlowProvider } from 'reactflow';
import { VisualBuilder } from '@/components/editor/VisualBuilder';

export default function EditorPage() {
  return (
    <ReactFlowProvider>
      <VisualBuilder />
    </ReactFlowProvider>
  );
}
