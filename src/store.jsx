import { createState } from '@hookstate/core'

const store = createState({
  scoreModalIsOpen: false,
  gameIsOver: false,
  userIsPlaying: false,
  scoreBoard: { highestScore: 0, currentScore: 0 },
  bubblesCount: { bubblesPopped: 0, totalToBePopped: 20}
})

export default store
