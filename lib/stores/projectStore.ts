import { create } from 'zustand';
import { Project, ProjectSettings } from '@/lib/types/project';

interface ProjectState {
  currentProject: Project | null;
  projects: Project[];
  isLoading: boolean;
  error: string | null;
  
  setCurrentProject: (project: Project | null) => void;
  setProjects: (projects: Project[]) => void;
  updateProjectSettings: (settings: Partial<ProjectSettings>) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
  createProject: (name: string, description?: string) => void;
}

export const useProjectStore = create<ProjectState>((set, get) => ({
  currentProject: null,
  projects: [],
  isLoading: false,
  error: null,
  
  setCurrentProject: (project) => set({ currentProject: project }),
  
  setProjects: (projects) => set({ projects }),
  
  updateProjectSettings: (settings) => {
    const project = get().currentProject;
    if (project) {
      set({
        currentProject: {
          ...project,
          settings: { ...project.settings, ...settings },
        },
      });
    }
  },
  
  setLoading: (isLoading) => set({ isLoading }),
  
  setError: (error) => set({ error }),
  
  createProject: (name, description) => {
    const newProject: Project = {
      id: `project_${Date.now()}`,
      name,
      description,
      nodes: [],
      edges: [],
      settings: {
        theme: 'system',
        viewport: { x: 0, y: 0, zoom: 1 },
        autoSave: true,
        gridEnabled: true,
        snapToGrid: false,
      },
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    set({
      currentProject: newProject,
      projects: [...get().projects, newProject],
    });
  },
}));
