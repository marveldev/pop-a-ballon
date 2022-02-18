import './bubble.scss'

const Bubble = () => {
  return (
    <div className={"bubble-wrap"}>
      <div className={"header fw-bold d-flex justify-content-between"}>
        <p>Level <span>One</span></p>
        <p>Count Down: <span className={"fw-normal"}>00:00:00</span></p>
        <p>Balls Popped: <span className={"fw-normal"}>0</span></p>
      </div>

      <div>
        <div className="bubble b-one" />
        <div className="bubble b-two" />
        <div className="bubble b-three" />
        <div className="bubble b-four" />
        <div className="bubble b-five" />
        <div className="bubble b-six" />
        <div className="bubble b-seven" />
        <div className="bubble b-eight" />
        <div className="bubble b-nine" />
        <div className="bubble b-ten" />
      </div>
    </div>
  )
}

export default Bubble
