import { useState as reactHookState } from '@hookstate/core'
import { motion } from 'framer-motion'
import store from '../../store'
import './gameOver.scss'

const GameOver = () => {
  const { bubblesCount } = reactHookState(store)

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
            <p>Your Score: 366</p>
            <p className="card-title">Highest Score: 366</p>

            <div className={"d-flex justify-content-center gap-4 mt-4"}>
              <button className="btn rounded-circle text-white">
                <i className="material-icons">fast_forward</i>
              </button>

              <button className="btn rounded-circle text-white">
                <i className="material-icons">home</i>
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
            <p>Your Score: 366</p>
            <p className="card-title">Highest Score: 366</p>

            <div className={"d-flex justify-content-center gap-4 mt-4"}>
              <button className="btn rounded-circle text-white">
                <i className="material-icons">replay</i>
              </button>

              <button className="btn rounded-circle text-white">
                <i className="material-icons">home</i>
              </button>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  )
}

export default GameOver
