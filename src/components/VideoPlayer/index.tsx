import ReactPlayer from 'react-player'
import { UseAppSelector } from '../../store'

export function VideoPlayer() {
  const video = UseAppSelector((state) => {
    const { currentModuleIndex, currentLessonIndex } = state.player
    const currentLesson =
      state.player.course.modules[currentModuleIndex].lessons[
        currentLessonIndex
      ]

    return currentLesson
  })
  return (
    <div className="aspect-video w-full bg-zinc-950">
      <ReactPlayer
        width={'100%'}
        height={'100%'}
        controls={true}
        url={`https://www.youtube.com/watch?v=${video.id}`}
      />
    </div>
  )
}
