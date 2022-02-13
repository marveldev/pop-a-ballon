import { useState } from 'react'
import { BallPop, Guide, Home, Statistics } from './components'

const App = () => {
  const [isSettings, setIsSettings] = useState(false)
  const [isGuide, setIsGuide] = useState(false)
  const [userIsPlaying, setUserIsPlaying] = useState(false)

  return (
    <div className={"position-absolute w-100 h-100"}>
      {!userIsPlaying && (
        <Home setIsSettings={setIsSettings} setIsGuide={setIsGuide} setUserIsPlaying={setUserIsPlaying} />
      )}
      {isSettings && <Statistics setIsSettings={setIsSettings} />}
      {isGuide && <Guide setIsGuide={setIsGuide} />}
      {userIsPlaying && <BallPop />}
    </div>
  )
}

export default App
