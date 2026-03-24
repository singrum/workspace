import { WorkspaceStoreProvider } from "@singrum/workspace"
import { Outlet, useLoaderData } from "react-router"
import { SidebarProvider } from "~/components/ui/sidebar"
import { db } from "~/lib/dexie"
import { AppSidebar } from "./+components/app-sidebar"
import MainHeader from "./+components/main-header"

export async function clientLoader() {
  const nodes = await db.getRootNodes()

  return {
    initialNodes: nodes,
  }
}

clientLoader.hydrate = true

export default function Layout() {
  const { initialNodes } = useLoaderData<typeof clientLoader>()
  console.log(initialNodes)
  return (
    <WorkspaceStoreProvider repository={db}>
      <SidebarProvider>
        <AppSidebar />
        <main className="flex-1">
          <MainHeader />
          <Outlet />
        </main>
      </SidebarProvider>
    </WorkspaceStoreProvider>
  )
}
