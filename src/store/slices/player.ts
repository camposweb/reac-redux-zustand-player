import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { useAppSelector } from '..'

export const playerSlice = createSlice({
  name: 'player',
  initialState: {
    course: {
      modules: [
        {
          id: '1',
          title: 'Iniciando com React',
          lessons: [
            {
              id: 'NvnJRLTG_5Y',
              title: 'Fundamentos do Redux',
              duration: '09:13',
            },
            {
              id: 'P5ceqNLibpA',
              title: 'Muito além do código',
              duration: '09:13',
            },
            {
              id: '2alg7MQ6_sI',
              title: 'Como usar Git e Github',
              duration: '09:13',
            },
          ],
        },
        {
          id: '2',
          title: 'Iniciando com Redux',
          lessons: [
            {
              id: 'BDVdX9JbZB0',
              title: 'Fundamentos do Redux 01',
              duration: '09:13',
            },
            {
              id: 'Axi6biI65DY',
              title: 'Fundamentos do Redux 02',
              duration: '09:13',
            },
          ],
        },
      ],
    },
    currentModuleIndex: 0,
    currentLessonIndex: 0,
  },

  reducers: {
    play: (state, action: PayloadAction<[number, number]>) => {
      state.currentModuleIndex = action.payload[0]
      state.currentLessonIndex = action.payload[1]
    },

    next: (state) => {
      const nextLessonIndex = state.currentLessonIndex + 1
      const nextLesson =
        state.course.modules[state.currentModuleIndex].lessons[nextLessonIndex]

      if (nextLesson) {
        state.currentLessonIndex = nextLessonIndex
      } else {
        const nextModuleIndex = state.currentModuleIndex + 1
        const nextModule = state.course.modules[nextModuleIndex]

        if (nextModule) {
          state.currentModuleIndex = nextModuleIndex
          state.currentLessonIndex = 0
        }
      }
    },
  },
})

export const player = playerSlice.reducer
export const { play, next } = playerSlice.actions

export const useCurrentLesson = () => {
  return useAppSelector((state) => {
    const { currentModuleIndex, currentLessonIndex } = state.player
    const currentModule = state.player.course.modules[currentModuleIndex]
    const currentLesson = currentModule.lessons[currentLessonIndex]

    return { currentModule, currentLesson }
  })
}
