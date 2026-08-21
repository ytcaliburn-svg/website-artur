import { cn } from "@/lib/utils"

export function AiImageTag({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "absolute z-10 rounded-full bg-black/55 px-2 py-1 text-[10px] font-medium tracking-wide text-white backdrop-blur-sm",
        className
      )}
    >
      KI-generiert
    </span>
  )
}
