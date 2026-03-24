export type NodeType = "file" | "folder";

interface BaseNode {
  id: string;
  parentId: string | null;
  type: NodeType;
}
export interface FileNode<T = Record<string, any>> extends BaseNode {
  content: T;
}

// 폴더 특화 속성
export interface FolderNode extends BaseNode {
  childIds: string[]; // 자식 노드들의 ID 리스트
}

export interface WorkspaceNode {
  id: string;
  type: NodeType;
  parentId: string;
}

export interface WorkspaceRepository {
  getNode(id: string): Promise<WorkspaceNode | null>;
  getChildren(id: string): Promise<WorkspaceNode[]>;
  addNode(node: WorkspaceNode): Promise<any>;
  deleteNode(id: string): Promise<any>;
}
