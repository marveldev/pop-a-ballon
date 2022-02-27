import { useState } from 'react'
import { useState as reactHookState } from '@hookstate/core'
import { Bubble, Help, Home, Scoreboard } from './components'
import store from './store'

const App = () => {
  const [guideModalIsOpen, setGuideModalIsOpen] = useState(false)
  const [userIsPlaying, setUserIsPlaying] = useState(false)
  const { scoreModalIsOpen } = reactHookState(store)

  return (
    <div className={"app position-absolute w-100 h-100 text-white"}>
      {!userIsPlaying && (
        <Home setGuideModalIsOpen={setGuideModalIsOpen} setUserIsPlaying={setUserIsPlaying} />
      )}
      {scoreModalIsOpen.get() && <Scoreboard />}
      {guideModalIsOpen && <Help setGuideModalIsOpen={setGuideModalIsOpen} />}
      {userIsPlaying && <Bubble />}
    </div>
  )
}

export default App
