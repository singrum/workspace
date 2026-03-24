import { Separator } from "~/components/ui/separator"
import { SidebarTrigger } from "~/components/ui/sidebar"

export default function MainHeader() {
  return (
    <header className="flex w-full border-b bg-sidebar">
      <div className="p-0">
        <SidebarTrigger className="size-10 rounded-none" />
      </div>
      <Separator orientation="vertical" />
    </header>
  )
}
