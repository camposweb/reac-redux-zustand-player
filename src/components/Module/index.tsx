import { ChevronDown, Video } from 'lucide-react'

export function Module() {
  return (
    <div>
      <button className="flex w-full items-center gap-3 bg-zinc-800 p-4">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-950 text-xs">
          1
        </span>
        <span className="flex flex-col gap-1 text-left">
          <strong className="text-sm">desvendando modúlo</strong>
          <span className="text-xs text-zinc-400">12 aulas</span>
        </span>
        <ChevronDown className="ml-auto h-4 w-4 text-zinc-400" />
      </button>
      <nav className="relative flex flex-col gap-4 p-6">
        <button className="flex items-center gap-3 text-sm text-zinc-400">
          <Video className="h-4 w-4 text-zinc-500" />
          <span>Fundamentos do Redux</span>
          <span className="ml-auto font-mono text-xs text-zinc-500">09:13</span>
        </button>
        <button className="flex items-center gap-3 text-sm text-zinc-400">
          <Video className="h-4 w-4 text-zinc-500" />
          <span>Fundamentos do Redux</span>
          <span className="ml-auto font-mono text-xs text-zinc-500">09:13</span>
        </button>
      </nav>
    </div>
  )
}
