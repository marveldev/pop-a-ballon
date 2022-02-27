import { useEffect, useState } from 'react'
import pop from './pop.mp3'
import './bubble.scss'

const Bubble = () => {
  const bubArray = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']
  const audioElement = new Audio(pop)
  const [counter, setCounter] = useState(40)

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000)
    counter === 0 && alert('game over')
  }, [counter])

  const popBubble = value => {
    const bubble = document.querySelector(`.${value}`)
    const bubblePosition = bubble.getBoundingClientRect()

    bubble.style.left = bubblePosition.left+'px'
    bubble.style.top = bubblePosition.top+'px'
    bubble.classList.add('pop')

    audioElement.play()

    setTimeout(() => {
      bubble.classList.remove('pop')
      bubble.removeAttribute('style')
    }, 100)
  }

  return (
    <div className={"bubble-wrap w-100 h-100"}>
      <div className={"header text-white fw-bold d-flex justify-content-lg-evenly"}>
        <p>Level: <span className={"fw-normal"}>One</span></p>
        <p>Count Down:
          <span className={"fw-normal"}> 00:00:{counter < 10 ? `0${counter}` : counter}</span>
        </p>
        <p>Bubbles: <span className={"fw-normal"}>0/20</span></p>
      </div>

      <div className="bubbles">
        {bubArray.map(value => (
          <span
            key={value}
            className={`bubble ${value}`}
            onClick={() => popBubble(value)}
          />
        ))}
      </div>
    </div>
  )
}

export default Bubble
