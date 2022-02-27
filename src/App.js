import { useState } from 'react'
import { useState as reactHookState } from '@hookstate/core'
import { Bubble, Help, Home, Scoreboard, Win } from './components'
import store from './store'

const App = () => {
  const [guideModalIsOpen, setGuideModalIsOpen] = useState(false)
  const { scoreModalIsOpen, gameIsOver, userIsPlaying } = reactHookState(store)

  return (
    <div className={"app position-absolute w-100 h-100 text-white"}>
      {!userIsPlaying.get() && !gameIsOver.get() && (
        <Home setGuideModalIsOpen={setGuideModalIsOpen} />
      )}
      {scoreModalIsOpen.get() && <Scoreboard />}
      {userIsPlaying.get() && <Bubble />}
      {guideModalIsOpen && <Help setGuideModalIsOpen={setGuideModalIsOpen} />}
      {gameIsOver.get() && <Win/>}
    </div>
  )
}

export default App
