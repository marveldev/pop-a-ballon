import { useState as reactHookState } from '@hookstate/core'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import store from '../../store'
import './gameOver.scss'

const GameOver = () => {
  const { bubblesCount, userIsPlaying, gameIsOver, scoreBoard, level } = reactHookState(store)

  useEffect(() => {
    const currentScore = scoreBoard.get().currentScore + bubblesCount.get().bubblesPopped
    const highScore = scoreBoard.get().highScore

    if (currentScore >= highScore) {
      scoreBoard.merge({ highScore: currentScore, currentScore })
      localStorage.setItem('highScore', currentScore.toString())
    } else {
      scoreBoard.merge({ currentScore })
    }
  }, [])
  
  const restartGame = replay => {
    gameIsOver.set(false)
    level.set(1)
    bubblesCount.set({ bubblesPopped: 0, totalToBePopped: 15})
    scoreBoard.merge({ currentScore: 0})

    if (replay) userIsPlaying.set(true)
  }
  
  const beginNextLevel = replay => {
    gameIsOver.set(false)
    level.set(level.get() + 1)
    bubblesCount.merge({
      bubblesPopped: 0, totalToBePopped: bubblesCount.get().totalToBePopped + 5
    })

    if (replay) userIsPlaying.set(true)
  }

  return (
    <motion.div className={"game-over m-auto"}>
      <motion.div
        className={"ring-bg-top"}
        initial={{ x: -200 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      />

      <motion.div
        className={"ring-bg-bottom"}
        initial={{ x: 200 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      />

      <motion.div
        className={"bubble-bg-top"}
        initial={{ x: 200 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      />

      <motion.div
        className={"bubble-bg-bottom"}
        initial={{ x: -200 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      />

      {bubblesCount.get().bubblesPopped >= bubblesCount.get().totalToBePopped ? (
        <div className="card text-center bg-transparent">
          <div className="card-header text-danger fw-bold p-0">
            <p>😃</p>
            <p className={"lh-1"}>You Win</p>
          </div>

          <div className="card-body">
            <p>Your Score: {scoreBoard.get().currentScore}</p>
            <p className="card-title">Highest Score: { scoreBoard.get().highScore }</p>

            <div className={"d-flex justify-content-center gap-4 mt-4"}>
              <button
                className="btn rounded-circle text-white"
                onClick={() => beginNextLevel(false)}
              >
                <i className="material-icons">home</i>
              </button>

              <button
                className="btn rounded-circle text-white"
                onClick={() => beginNextLevel(true)}
              >
                <i className="material-icons">fast_forward</i>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="card text-center bg-transparent">
          <div className="card-header text-danger fw-bold p-0">
            <p>😞</p>
            <p className={"lh-1"}>You Lose</p>
          </div>

          <div className="card-body">
            <p>Your Score: {scoreBoard.get().currentScore}</p>
            <p className="card-title">Highest Score: { scoreBoard.get().highScore }</p>

            <div className={"d-flex justify-content-center gap-4 mt-4"}>
              <button
                className="btn rounded-circle text-white"
                onClick={() => restartGame(false)}
              >
                <i className="material-icons">home</i>
              </button>

              <button
                className="btn rounded-circle text-white"
                onClick={() => restartGame(true)}
              >
                <i className="material-icons">replay</i>
              </button>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  )
}

export default GameOver
