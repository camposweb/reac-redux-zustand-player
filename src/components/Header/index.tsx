import { useAppSelector } from '../../store'
import { useCurrentLesson } from '../../store/slices/player'

export function Header() {
  const { currentModule, currentLesson } = useCurrentLesson()
  const isCourseLoading = useAppSelector((state) => state.player.isLoading)

  if (isCourseLoading) {
    return (
      <div className="flex w-5 animate-pulse flex-col gap-2">
        <div className="flex h-5 w-60 rounded-md bg-zinc-500"></div>
        <div className="flex h-2 w-56 rounded-md bg-zinc-500"></div>
      </div>
    )
  }
  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-2xl font-bold">{currentLesson?.title}</h1>
      <span className="text-sm text-zinc-400">
        Módulo &quot;{currentModule?.title}&quot;
      </span>
    </div>
  )
}
