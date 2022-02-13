import { useState } from 'react'
import { Home, Statistics } from './components'

const App = () => {
  const [isSettings, setIsSettings] = useState(false)

  return (
    <div className={"position-absolute w-100 h-100"}>
      <Home setIsSettings={setIsSettings} />
      {isSettings && <Statistics setIsSettings={setIsSettings} />}
    </div>
  )
}

export default App
