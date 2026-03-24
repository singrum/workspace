export type NodeType = "file" | "folder";

export interface WorkspaceNode {
  id: string;
  type: NodeType;
  parentId: string | null;
  name: string;
}

export interface WorkspaceRepository {
  getNode(id: string): Promise<WorkspaceNode | null>;
  addNode(node: WorkspaceNode): Promise<void>;
  deleteNode(id: string): Promise<void>;

  getAllNodes(): Promise<Record<string, WorkspaceNode>>;
}
