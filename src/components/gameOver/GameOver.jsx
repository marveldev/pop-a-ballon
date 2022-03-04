import { useState as reactHookState } from '@hookstate/core'
import store from '../../store'
import './gameOver.scss'

const GameOver = () => {
  const { bubblesCount } = reactHookState(store)

  return (
    <div className={"game-over m-auto"}>
      {bubblesCount.get().bubblesPopped >= bubblesCount.get().totalToBePopped ? (
        <div>
          congratulations you passed.
          <button className={"btn btn-danger"}>begin next level</button>
          <button className={"btn btn-success"}>back to home</button>
        </div>
      ) : (
        <div className="card text-center bg-transparent">
          <div className="card-header text-danger fw-bold p-0">
            <p>😞</p>
            <p className={"lh-1"}>Game Over</p>
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
    </div>
  )
}

export default GameOver
