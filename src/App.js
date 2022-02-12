import { useState } from 'react'
import { Home, Settings } from './components'

const App = () => {
  const [isSettings, setIsSettings] = useState(false)

  return (
    <div className={"position-absolute w-100 h-100"}>
      <Home setIsSettings={setIsSettings} />
      {isSettings && <Settings setIsSettings={setIsSettings} />}
    </div>
  )
}

export default App
