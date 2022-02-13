import { useState } from 'react'
import { Guide, Home, Statistics } from './components'

const App = () => {
  const [isSettings, setIsSettings] = useState(false)
  const [isGuide, setIsGuide] = useState(false)

  return (
    <div className={"position-absolute w-100 h-100"}>
      <Home setIsSettings={setIsSettings} setIsGuide={setIsGuide} />
      {isSettings && <Statistics setIsSettings={setIsSettings} />}
      {isGuide && <Guide setIsGuide={setIsGuide} />}
    </div>
  )
}

export default App
