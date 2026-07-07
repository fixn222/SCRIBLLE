import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "./ui/button"
import {
  CheckCircle2,
  Circle,
  Edit2Icon,
  PinIcon,
  Trash2Icon,
} from "lucide-react"

export interface NoteCardProps {
  id: number
  title: string
  content: string
  tags: string[]
  createdAt: string
  isPinned?: boolean
  isCompleted?: boolean
  onPinToggle?: (id: number) => void
  onDelete?: (id: number) => void
  onStatusToggle?: (id: number) => void
}
const NoteCard = ({
  id,
  title,
  content,
  tags,
  createdAt,
  isPinned = false,
  isCompleted = false,
  onPinToggle,
  onDelete,
  onStatusToggle,
}: NoteCardProps) => {
  const createdDate = new Date(createdAt)
  const date = createdDate.toLocaleDateString("en-CA").replaceAll("-", "/")
  const time = createdDate.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  })

  return (
    <Card
      className={`w-full border ${
        isCompleted ? "border-emerald-500/30 bg-emerald-950/10" : ""
      }`}
    >
      <CardHeader>
        <CardTitle className="line-clamp-2 pr-20 text-lg font-bold">
          {title}
        </CardTitle>

        <CardDescription className="mt-2 text-shadow-white">
          <p className="line-clamp-3 leading-6">{content}</p>
        </CardDescription>
        <CardAction className="flex gap-2">
          <Button
            size="icon"
            variant={isPinned ? "default" : "outline"}
            onClick={() => onPinToggle?.(id)}
            aria-label={isPinned ? "Unpin note" : "Pin note"}
          >
            <PinIcon />
          </Button>
          <Button
            size="icon"
            variant={"destructive"}
            onClick={() => onDelete?.(id)}
            aria-label="Delete note"
          >
            <Trash2Icon />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-border bg-muted px-2 py-1 text-xs text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex flex-row justify-between text-sm text-muted-foreground">
          <p>{date}</p>
          <p>{time}</p>
        </div>
      </CardContent>
      <CardFooter className="flex flex-row justify-between">
        <Button variant={"default"}>
          <Edit2Icon />
          Edit Note
        </Button>

        <Button variant={"outline"} onClick={() => onStatusToggle?.(id)}>
          {isCompleted ? <CheckCircle2 /> : <Circle />}
          {isCompleted ? "Completed" : "Mark as Done"}
        </Button>
      </CardFooter>
    </Card>
  )
}
export default NoteCard
