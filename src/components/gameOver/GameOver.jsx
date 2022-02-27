import { useState as reactHookState } from '@hookstate/core'
import store from '../../store'

const GameOver = () => {
  const { bubblesCount } = reactHookState(store)

  return (
    <div>
      {bubblesCount.get().bubblesPopped >= bubblesCount.get().totalToBePopped ? (
        <div>
          congratulations you passed.
          <button className={"btn btn-danger"}>begin next level</button>
          <button className={"btn btn-success"}>back to home</button>
        </div>
      ) : (
        <div>
          Game over, sorry you failed.
          <button className={"btn btn-danger"}>retry</button>
          <button className={"btn btn-success"}>back to home</button>
        </div>
      )}
    </div>
  )
}

export default GameOver
