import { createState } from '@hookstate/core'

const store = createState({
  scoreModalIsOpen: false,
  highestScore: 0,
  currentScore: 0
})

export default store
