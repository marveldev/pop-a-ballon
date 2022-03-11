import { useEffect, useState } from 'react'
import { useState as reactHookState } from '@hookstate/core'
import { toWords } from 'number-to-words'
import store from '../../store'
import pop from './pop.mp3'
import './bubble.scss'

const Bubble = () => {
  const bubArray = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']
  const audioElement = new Audio(pop)
  const [counter, setCounter] = useState(10)
  const { gameIsOver, userIsPlaying, bubblesCount, level } = reactHookState(store)
  let timer

  useEffect(() => {
    if (counter >= 0) {
      timer = setTimeout(() => setCounter(counter - 1), 1000)
    } else {
      gameIsOver.set(true)
      userIsPlaying.set(false)
    }

    return () => {
      counter < 0 && clearTimeout(timer)
    }
  }, [counter, gameIsOver, userIsPlaying])

  const popBubble = value => {
    const bubble = document.querySelector(`.${value}`)
    const bubblePosition = bubble.getBoundingClientRect()

    bubble.style.left = bubblePosition.left+'px'
    bubble.style.top = bubblePosition.top+'px'
    bubble.classList.add('pop')

    audioElement.play()
    bubblesCount.merge({bubblesPopped: bubblesCount.get().bubblesPopped + 1})

    setTimeout(() => {
      bubble.classList.remove('pop')
      bubble.removeAttribute('style')
    }, 100)
  }

  return (
    <div className={"bubble-wrap w-100 h-100"}>
      <div className={"header text-white fw-bold d-flex justify-content-evenly"}>
        <p>Level: &nbsp;
          <span className={"fw-normal text-capitalize"}>
            {toWords(level.get())}
          </span>
        </p>

        <p>Count Down: &nbsp;
          <span className={"fw-normal"}>
            00:00:{counter < 10 ? `0${counter}` : counter}
          </span>
        </p>

        <p>Bubbles: &nbsp;
          <span className={"fw-normal"}>
            {bubblesCount.get().bubblesPopped}/{bubblesCount.get().totalToBePopped}
          </span>
        </p>
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
