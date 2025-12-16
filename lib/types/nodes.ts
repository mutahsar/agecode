import { Node as FlowNode, Edge as FlowEdge } from 'reactflow';

export type NodeType = 'page' | 'component' | 'computation' | 'database' | 'api';

export interface BaseNodeData {
  id: string;
  label: string;
}

export interface PageNodeData extends BaseNodeData {
  name: string;
  route: string;
  layout: 'default' | 'full' | 'sidebar';
  components: string[];
  settings: PageSettings;
}

export interface PageSettings {
  title?: string;
  description?: string;
  backgroundColor?: string;
  padding?: string;
}

export interface ComponentNodeData extends BaseNodeData {
  componentType: 'button' | 'form' | 'table' | 'chart' | 'text' | 'image' | 'input' | 'select';
  props: Record<string, any>;
  events: EventHandler[];
  styles: React.CSSProperties;
}

export interface EventHandler {
  event: string;
  action: string;
  target?: string;
}

export interface ComputationNodeData extends BaseNodeData {
  name: string;
  formula: string;
  inputs: ComputationInput[];
  output: ComputationOutput;
}

export interface ComputationInput {
  name: string;
  type: 'number' | 'string' | 'boolean' | 'array';
  value?: any;
  source?: string; // ID of connected node
}

export interface ComputationOutput {
  name: string;
  type: 'number' | 'string' | 'boolean' | 'array' | 'object';
  value?: any;
}

export interface DatabaseNodeData extends BaseNodeData {
  connectionId?: string;
  operation: 'select' | 'insert' | 'update' | 'delete' | 'query';
  table?: string;
  query?: string;
  params?: Record<string, any>;
}

export interface APINodeData extends BaseNodeData {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  headers?: Record<string, string>;
  body?: any;
  responseMapping?: Record<string, string>;
}

export type CustomNode = FlowNode<PageNodeData | ComponentNodeData | ComputationNodeData | DatabaseNodeData | APINodeData>;
export type CustomEdge = FlowEdge;
