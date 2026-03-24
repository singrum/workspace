// src/stores/counter-store.ts
import { createStore } from "zustand/vanilla";
import { NodeType, WorkspaceNode, WorkspaceRepository } from "./types";

export type WorkspaceState = {
  nodes: Record<string, WorkspaceNode>;
  tabs: string[];
};

export type WorkspaceActions = {
  addNode: (parentId: string, id: string, type: NodeType) => void;
};

export type WorkspaceStore = WorkspaceState & WorkspaceActions;

export const defaultInitState: WorkspaceState = {
  nodes: {},
  tabs: [],
};

export const createWorkspaceStore = (
  initState: Partial<WorkspaceState>,
  repository: WorkspaceRepository,
) => {
  return createStore<WorkspaceStore>()((set) => ({
    addNode: (parentId: string, id: string, type: NodeType) => {
      const node = {
        parentId,
        id,
        type,
      };
      set((state) => ({
        nodes: {
          ...state.nodes,
          [id]: node,
        },
      }));
      repository.addNode(node);
    },
    ...defaultInitState,
    ...initState,
  }));
};
