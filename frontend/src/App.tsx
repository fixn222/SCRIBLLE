import DetailCard from "./components/detailcard"
import Navbar from "./components/navbar"
import { Check, Clock, Inbox } from "lucide-react"
import Search from "./components/advancedsearch"
import { useState } from "react"
import NoteCard from "./components/notecard"

const App = () => {
  const [activeFilter, setActiveFilter] = useState<
    "All" | "Active" | "Completed"
  >("All")
  const [searchQuery, setSearchQuery] = useState("")
  return (
    <div>
      <Navbar />

      <div className="mt-10 flex flex-col gap-5 p-5 sm:flex-row">
        <DetailCard progress={4} icon={<Inbox />} status="TOTAL" />
        <DetailCard progress={0} icon={<Check />} status="COMPLETED" />
        <DetailCard progress={4} icon={<Clock />} status="PENDING" />
      </div>
      <div className="mt-10 p-5">
        <Search
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </div>
      <div className="flex flex-col gap-5 p-5 sm:flex-row">
        <NoteCard
          id={1}
          title="Plan weekly goals"
          content="Review current tasks, organize priorities, and mark the important items for the next sprint."
          tags={["planning", "work"]}
          createdAt="2026-06-29T08:24:00"
          isPinned
        />
        <NoteCard
          id={2}
          title="Research note structure"
          content="Keep notes short, searchable, and grouped with clear tags for faster review later."
          tags={["research", "notes"]}
          createdAt="2026-06-30T10:15:00"
        />
        <NoteCard
          id={3}
          title="Clean completed items"
          content="Check finished notes and archive anything that no longer needs attention."
          tags={["cleanup"]}
          createdAt="2026-07-01T14:40:00"
          isCompleted
        />
      </div>
    </div>
  )
}

export default App
