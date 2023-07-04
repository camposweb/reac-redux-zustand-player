import { describe, it, expect } from 'vitest'
import { player as reducer, play, next, PlayerState } from './player'

/* test('reducers', () => {
  let state;
  state = reducers({player:{course:{modules:[{id:'1',title:'Iniciando com React',lessons:[{id:'NvnJRLTG_5Y',title:'Fundamentos do Redux',duration:'09:13'}]},{id:'2',title:'Iniciando com Redux',lessons:[{id:'BDVdX9JbZB0',title:'Fundamentos do Redux 01',duration:'09:13'},{id:'Axi6biI65DY',title:'Fundamentos do Redux 02',duration:'09:13'}]}]},currentModuleIndex:1,currentLessonIndex:0}}, {type:'player/next'});
  expect(state).toEqual({player:{course:{modules:[{id:'1',title:'Iniciando com React',lessons:[{id:'NvnJRLTG_5Y',title:'Fundamentos do Redux',duration:'09:13'}]},{id:'2',title:'Iniciando com Redux',lessons:[{id:'BDVdX9JbZB0',title:'Fundamentos do Redux 01',duration:'09:13'},{id:'Axi6biI65DY',title:'Fundamentos do Redux 02',duration:'09:13'}]}]},currentModuleIndex:1,currentLessonIndex:1}});
}); */

const exampleState: PlayerState = {
  course: {
    id: 1,
    modules: [
      {
        id: 1,
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
        ],
      },
      {
        id: 2,
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
}

describe('player slice', () => {
  it('should be able to play', () => {
    const state = reducer(exampleState, play([1, 1]))
    expect(state.currentModuleIndex).toEqual(1)
    expect(state.currentLessonIndex).toEqual(1)
  })

  it('should be able to play next video automatically', () => {
    const state = reducer(exampleState, next())
    expect(state.currentModuleIndex).toEqual(0)
    expect(state.currentLessonIndex).toEqual(1)
  })

  it('should be able to play next module automatically', () => {
    const state = reducer(
      {
        ...exampleState,
        currentLessonIndex: 1,
      },
      next(),
    )
    expect(state.currentModuleIndex).toEqual(1)
    expect(state.currentLessonIndex).toEqual(0)
  })

  it('should not update the current module and lesson index if there is no next lesson available', () => {
    const state = reducer(
      {
        ...exampleState,
        currentModuleIndex: 1,
        currentLessonIndex: 1,
      },
      next(),
    )
    expect(state.currentModuleIndex).toEqual(1)
    expect(state.currentLessonIndex).toEqual(1)
  })
})
