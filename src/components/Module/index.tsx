import { ChevronDown } from 'lucide-react'
import { Lesson } from '../Lesson'
import * as Collapsible from '@radix-ui/react-collapsible'
import { UseAppSelector } from '../../store'
import { useDispatch } from 'react-redux'
import { play } from '../../store/slices/player'

interface ModuleProps {
  moduleIndex: number
  title: string
  amountOfLessons: number
}

export function Module({ moduleIndex, title, amountOfLessons }: ModuleProps) {
  const dispatch = useDispatch()

  const lessons = UseAppSelector(
    (state) => state.player.course.modules[moduleIndex].lessons,
  )
  return (
    <Collapsible.Root className="group">
      <Collapsible.Trigger className="flex w-full items-center gap-3 bg-zinc-800 p-4">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-950 text-xs">
          {moduleIndex + 1}
        </span>
        <span className="flex flex-col gap-1 text-left">
          <strong className="text-sm">{title}</strong>
          <span className="text-xs text-zinc-400">
            {amountOfLessons} {amountOfLessons > 1 ? 'aulas' : 'aula'}
          </span>
        </span>
        <ChevronDown className="ml-auto h-4 w-4 text-zinc-400 transition group-data-[state=open]:rotate-180" />
      </Collapsible.Trigger>
      <Collapsible.Content>
        <nav className="relative flex flex-col gap-4 p-6">
          {lessons.map((lesson, lessonIndex) => {
            return (
              <Lesson
                key={lesson.id}
                title={lesson.title}
                duration={lesson.duration}
                onPlay={() => dispatch(play([moduleIndex, lessonIndex]))}
              />
            )
          })}
        </nav>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
