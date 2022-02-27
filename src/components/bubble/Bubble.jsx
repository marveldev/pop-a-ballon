import pop from './pop.mp3'
import './bubble.scss'

const Bubble = () => {
  const bubArray = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']
  const audioElement = new Audio(pop)

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

  const getRandomPosition = () => {
    for (let index = 0; index < bubArray.length; index++) {
      const bubble = bubArray[index]
      const element = document.querySelector(`.${bubble}`)
      const x = document.body.offsetHeight - element.clientHeight
      const y = document.body.offsetWidth - element.clientWidth
      const randomX = Math.floor(Math.random() * x)
      const randomY = Math.floor(Math.random() * y)

      element.style.top = randomY+'px'
      element.style.left = randomX+'px'
      element.style.zIndex = index
      element.style.animationDuration = Math.floor(Math.random() * 15 + 7.5) + "s"
    }
  }

  setTimeout(() => {
    getRandomPosition()
  }, 10)

  return (
    <div className={"bubble-wrap w-100 h-100"}>
      <div className={"header text-white fw-bold d-flex justify-content-between"}>
        <p>Level <span>One</span></p>
        <p>Count Down: <span className={"fw-normal"}>00:00:00</span></p>
        <p>Balls Popped: <span className={"fw-normal"}>0</span></p>
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
