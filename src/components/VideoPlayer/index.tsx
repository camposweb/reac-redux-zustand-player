import ReactPlayer from 'react-player'
import { useDispatch } from 'react-redux'
import { next, useCurrentLesson } from '../../store/slices/player'

export function VideoPlayer() {
  const dispatch = useDispatch()
  const { currentLesson } = useCurrentLesson()

  function handlePlayNext() {
    dispatch(next())
  }

  if (!currentLesson) {
    return null
  }

  return (
    <div className="aspect-video w-full bg-zinc-950">
      <ReactPlayer
        width={'100%'}
        height={'100%'}
        controls={true}
        onEnded={handlePlayNext}
        playing
        url={`https://www.youtube.com/watch?v=${currentLesson.id}`}
      />
    </div>
  )
}
