import pop from './pop.mp3'
import './bubble.scss'

const Bubble = () => {
  const bubArray = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']
  const audioElement = new Audio(pop)
  let count = 0

  const popBubble = (value, event) => {
    console.log('i have been clicked' + ' ' + value)
    const posX = event.clientX
    const posY = event.clientY

    const bubble = document.querySelector(`.${value}`)

    bubble.style.left = posX+'px'
    bubble.style.top = posY+'px'

    bubble.classList.add("popped")

    audioElement.play()
    count++

    setTimeout(() => {
      bubble.classList.remove("popped")
      bubble.removeAttribute('style')
    }, 3000)
  }

  return (
    <div className={"bubble-wrap w-100 h-100"}>
      <div className={"header text-white fw-bold d-flex justify-content-between"}>
        <p>Level <span>One</span></p>
        <p>Count Down: <span className={"fw-normal"}>00:00:00</span></p>
        <p>Balls Popped: <span className={"fw-normal"}>0</span></p>
      </div>

      <div className="bubbles">
        {bubArray.map((value, index) => (
          <span
            key={index}
            className={`bub ${value}`}
            onClick={event => popBubble(value, event)}
          />
        ))}
      </div>
    </div>
  )
}

export default Bubble
