// src/stores/counter-store.ts
import { createStore } from "zustand/vanilla";
import { WorkspaceNode, WorkspaceRepository } from "./workspace";

export type WorkspaceState = {
  nodes: Record<string, WorkspaceNode>;
  tabs: string[];
};

export type WorkspaceActions = {};

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
    ...defaultInitState,
    ...initState,
  }));
};
