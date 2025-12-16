import { CustomNode, CustomEdge } from './nodes';

export interface Project {
  id: string;
  name: string;
  description?: string;
  nodes: CustomNode[];
  edges: CustomEdge[];
  settings: ProjectSettings;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProjectSettings {
  theme?: 'light' | 'dark' | 'system';
  viewport?: {
    x: number;
    y: number;
    zoom: number;
  };
  autoSave?: boolean;
  gridEnabled?: boolean;
  snapToGrid?: boolean;
}

export interface DatabaseConnectionConfig {
  id: string;
  name: string;
  type: 'postgresql' | 'mysql' | 'mongodb';
  host: string;
  port: number;
  database: string;
  username: string;
  password: string;
  isActive: boolean;
}
