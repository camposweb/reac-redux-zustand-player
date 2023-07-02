import { createSlice } from '@reduxjs/toolkit'

const playerSlice = createSlice({
  name: 'player',
  initialState: {
    course: {
      modules: [
        {
          id: '1',
          title: 'Iniciando com React',
          lessons: [
            {
              id: 'Axi6biI65DY',
              title: 'Fundamentos do Redux',
              duration: '09:13',
            },
          ],
        },
        {
          id: '2',
          title: 'Iniciando com Redux',
          lessons: [
            {
              id: 'IZX-4VmKrRo',
              title: 'Fundamentos do Redux 02',
              duration: '09:13',
            },
          ],
        },
      ],
    },
  },

  reducers: {},
})

export const player = playerSlice.reducer
