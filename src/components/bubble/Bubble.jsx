import './bubble.scss'

const Bubble = () => {
  const bubArray = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']
  const popBubble = () => {
    
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
          <span key={index} className={`bub ${value}`} />
        ))}
      </div>
    </div>
  )
}

export default Bubble
