import { createContext, ReactNode, useContext, useState } from "react";
import { useStore } from "zustand";
import { WorkspaceRepository } from "./types";
import { createWorkspaceStore, WorkspaceStore } from "./workspace-store";

export type WorkspaceStoreApi = ReturnType<typeof createWorkspaceStore>;

export const WorkspaceStoreContext = createContext<
  WorkspaceStoreApi | undefined
>(undefined);

export interface WorkspaceStoreProviderProps {
  children: ReactNode;
  repository: WorkspaceRepository;
  initialState?: Partial<WorkspaceStore>;
}

export const WorkspaceStoreProvider = ({
  children,
  initialState,
  repository,
}: WorkspaceStoreProviderProps) => {
  const [store] = useState(() =>
    createWorkspaceStore(initialState ?? {}, repository),
  );
  return (
    <WorkspaceStoreContext.Provider value={store}>
      {children}
    </WorkspaceStoreContext.Provider>
  );
};

export const useWorkspaceStore = <T,>(
  selector: (store: WorkspaceStore) => T,
): T => {
  const workspaceStoreContext = useContext(WorkspaceStoreContext);
  if (!workspaceStoreContext) {
    throw new Error(
      `useWorkspaceStore must be used within WorkspaceStoreProvider`,
    );
  }

  return useStore(workspaceStoreContext, selector);
};
