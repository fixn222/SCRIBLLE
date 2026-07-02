import DetailCard from "./components/detailcard"
import Navbar from "./components/navbar"
import { Check, Clock, Inbox } from "lucide-react"
import Search from "./components/advancedsearch"
import { useState } from "react"
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
    </div>
  )
}

export default App
