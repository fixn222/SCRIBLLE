import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type React from "react"

export type noteStatus = "TOTAL" | "COMPLETED" | "PENDING"

interface cardProps {
  icon: React.ReactNode
  progress: number
  status: noteStatus
}
const STATUS_CONFIG: Record<noteStatus, { label: string; subtext: string }> = {
  TOTAL: { label: "Total Notes", subtext: "All time" },
  COMPLETED: { label: "Completed", subtext: "Done" },
  PENDING: { label: "Pending", subtext: "In progress" },
}

const DetailCard = ({ icon, progress, status }: cardProps) => {
  const { label, subtext } = STATUS_CONFIG[status]
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>
          <div className="flex flex-row justify-between">
            <p className="text-sm uppercase text-shadow-white">{label}</p>{" "}
            {icon}
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <h2 className="mt-5 text-4xl font-bold text-white">
          {progress}
          <span className="ml-2 text-sm text-gray-400">{subtext}</span>
        </h2>
      </CardContent>
    </Card>
  )
}

export default DetailCard
