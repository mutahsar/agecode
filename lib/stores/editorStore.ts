import { create } from 'zustand';
import { CustomNode, CustomEdge } from '@/lib/types/nodes';
import { 
  Connection,
  Edge,
  EdgeChange,
  Node,
  NodeChange,
  addEdge,
  applyNodeChanges,
  applyEdgeChanges,
} from 'reactflow';

interface EditorState {
  nodes: CustomNode[];
  edges: CustomEdge[];
  selectedNodeId: string | null;
  viewport: { x: number; y: number; zoom: number };
  
  setNodes: (nodes: CustomNode[]) => void;
  setEdges: (edges: CustomEdge[]) => void;
  onNodesChange: (changes: NodeChange[]) => void;
  onEdgesChange: (changes: EdgeChange[]) => void;
  onConnect: (connection: Connection) => void;
  addNode: (node: CustomNode) => void;
  updateNode: (id: string, data: Partial<CustomNode['data']>) => void;
  deleteNode: (id: string) => void;
  setSelectedNodeId: (id: string | null) => void;
  setViewport: (viewport: { x: number; y: number; zoom: number }) => void;
  reset: () => void;
}

export const useEditorStore = create<EditorState>((set, get) => ({
  nodes: [],
  edges: [],
  selectedNodeId: null,
  viewport: { x: 0, y: 0, zoom: 1 },

  setNodes: (nodes) => set({ nodes }),
  
  setEdges: (edges) => set({ edges }),
  
  onNodesChange: (changes) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes) as CustomNode[],
    });
  },
  
  onEdgesChange: (changes) => {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },
  
  onConnect: (connection) => {
    set({
      edges: addEdge(connection, get().edges),
    });
  },
  
  addNode: (node) => {
    set({ nodes: [...get().nodes, node] });
  },
  
  updateNode: (id, data) => {
    set({
      nodes: get().nodes.map((node) =>
        node.id === id ? { ...node, data: { ...node.data, ...data } } : node
      ),
    });
  },
  
  deleteNode: (id) => {
    set({
      nodes: get().nodes.filter((node) => node.id !== id),
      edges: get().edges.filter((edge) => edge.source !== id && edge.target !== id),
      selectedNodeId: get().selectedNodeId === id ? null : get().selectedNodeId,
    });
  },
  
  setSelectedNodeId: (id) => set({ selectedNodeId: id }),
  
  setViewport: (viewport) => set({ viewport }),
  
  reset: () => set({ nodes: [], edges: [], selectedNodeId: null, viewport: { x: 0, y: 0, zoom: 1 } }),
}));
