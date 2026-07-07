import { FilterIcon, SearchIcon } from "lucide-react"
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group"
import { Button } from "./ui/button"
import { ButtonGroup } from "./ui/button-group"
import {
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenu,
} from "./ui/dropdown-menu"

export type FilterStatus = "All" | "Active" | "Completed"

interface searchProps {
  searchQuery: string
  setSearchQuery: (value: string) => void
  activeFilter: FilterStatus
  setActiveFilter: (filter: FilterStatus) => void
}

const Search = ({
  setSearchQuery,
  searchQuery,
  setActiveFilter,
  activeFilter,
}: searchProps) => {
  const filterTabs: FilterStatus[] = ["All", "Active", "Completed"]

  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-row gap-5">
        <div className="flex flex-col gap-5">
          <InputGroup className="gap-2 p-3 text-end sm:w-[360px]">
            <InputGroupInput
              placeholder="Search notes by title "
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <InputGroupAddon>
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
        </div>
      </div>
      <div className="mr-5 hidden flex-col md:flex">
        <ButtonGroup>
          {filterTabs.map((tab) => (
            <Button
              key={tab}
              variant={activeFilter === tab ? "default" : "ghost"}
              onClick={() => setActiveFilter(tab)}
            >
              {tab}
            </Button>
          ))}
        </ButtonGroup>
      </div>
      <div className="flex flex-row md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant={"outline"}>
              <span>
                <FilterIcon />
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="flex flex-col">
            {filterTabs.map((tab) => (
              <Button
                key={tab}
                variant={activeFilter === tab ? "default" : "outline"}
                onClick={() => setActiveFilter(tab)}
              >
                {tab}
              </Button>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}

export default Search
