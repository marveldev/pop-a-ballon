import { createState } from '@hookstate/core'

const store = createState({
  scoreModalIsOpen: false,
  gameIsOver: false,
  userIsPlaying: false,
  level: 1,
  scoreBoard: { highScore: localStorage.getItem('highScore') || 0, currentScore: 0 },
  bubblesCount: { bubblesPopped: 0, totalToBePopped: 15}
})

export default store