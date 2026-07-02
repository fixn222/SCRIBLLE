import { Button } from "./ui/button"
import { Plus, LucideTimerReset, NotebookIcon } from "lucide-react"

interface NavbarProps {
  onNewNoteClick?: () => void
  onResetWorkspace?: () => void
}

const Navbar = ({ onNewNoteClick, onResetWorkspace }: NavbarProps) => {
  return (
    <div className="m-5 flex h-[120px] flex-col items-center justify-between gap-2 p-5 text-center sm:flex-row">
      <div className="flex flex-col">
        <div className="flex flex-row items-center justify-center sm:justify-start">
          <NotebookIcon size={45} className="mr-2" />
          <h1 className="text-5xl font-bold tracking-wider text-white">
            {" "}
            SCRIBBLE
          </h1>
        </div>
        <p className="mt-2 text-left text-sm text-muted-foreground">
          clean and structured minimalist workspace
        </p>
      </div>

      <div className="flex flex-col">
        <div className="flex flex-row gap-2">
          <Button variant={"secondary"} onClick={onResetWorkspace}>
            <LucideTimerReset className="mr-1 h-4 w-4" /> RESET WORKSPACE
          </Button>
          <Button onClick={onNewNoteClick} className="cursor-pointer">
            <Plus className="mr-1 h-4 w-4" />
            NEW NOTE
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
