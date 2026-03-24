import type { WorkspaceNode } from "@singrum/workspace"
import Dexie, { type Table } from "dexie"

// 1. Dexie 데이터베이스 정의
class DexieRepo extends Dexie {
  nodes!: Table<WorkspaceNode, string> // id가 string인 테이블

  constructor() {
    super("WorkspaceDatabase")

    this.version(1).stores({
      nodes: "id, parentId, type",
    })
  }
  async getRootNodes(): Promise<WorkspaceNode[]> {
    return await this.nodes.where("parentId").equals("root").toArray()
  }
  async getNode(id: string): Promise<WorkspaceNode | null> {
    return (await this.nodes.get(id)) ?? null
  }
  async addNode(node: WorkspaceNode): Promise<string> {
    const result = await this.nodes.add(node)
    console.log(result)
    return result
  }
  async updateNode(
    id: string,
    updates: Partial<WorkspaceNode>
  ): Promise<number> {
    return await this.nodes.update(id, updates)
  }
  async deleteNode(id: string): Promise<void> {
    return await this.nodes.delete(id)
  }
  async getChildren(parentId: string): Promise<WorkspaceNode[]> {
    return await this.nodes.where("parentId").equals(parentId).toArray()
  }
}

export const db = new DexieRepo()
