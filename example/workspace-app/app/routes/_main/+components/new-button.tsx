import { File, Folder, Plus } from "lucide-react"
import { v4 } from "uuid"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu"
import { SidebarMenuButton } from "~/components/ui/sidebar"
import { useWorkspaceStore } from "../../../../../../dist"

export default function NewButton() {
  const addNode = useWorkspaceStore((state) => state.addNode)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <SidebarMenuButton className="data-[slot=sidebar-menu-button]:p-1.5!">
            <Plus />
            New
          </SidebarMenuButton>
        }
      />

      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuItem
            onClick={() => {
              const result = addNode("root", v4(), "file")
              console.log(result)
            }}
          >
            <File />
            New File
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              const result = addNode("root", v4(), "folder")
              console.log(result)
            }}
          >
            <Folder />
            New Folder
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
