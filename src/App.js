import { useState } from 'react'
import { Bubble, Help, Home, Dashboard } from './components'

const App = () => {
  const [isSettings, setIsSettings] = useState(false)
  const [isGuide, setIsGuide] = useState(false)
  const [userIsPlaying, setUserIsPlaying] = useState(false)

  return (
    <div className={"app position-absolute w-100 h-100 text-white"}>
      {!userIsPlaying && (
        <Home setIsSettings={setIsSettings} setIsGuide={setIsGuide} setUserIsPlaying={setUserIsPlaying} />
      )}
      {isSettings && <Dashboard setIsSettings={setIsSettings} />}
      {isGuide && <Help setIsGuide={setIsGuide} />}
      {userIsPlaying && <Bubble />}
    </div>
  )
}

export default App
