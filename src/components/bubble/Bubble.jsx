import './bubble.scss'

const Bubble = () => {
  return (
    <div className={"bubble-wrap w-100 h-100"}>
      <div className={"header fw-bold d-flex justify-content-between"}>
        <p>Level <span>One</span></p>
        <p>Count Down: <span className={"fw-normal"}>00:00:00</span></p>
        <p>Balls Popped: <span className={"fw-normal"}>0</span></p>
      </div>

      <div className="bubbles d-grid position-absolute w-100">
        <div className="justify-content-center">
          <div className={"bubble"}/>
        </div>
        <div className="m-auto">
          <div className={"bubble scaleX3 lg"}/>
          <div className={"bubble scaleX1"}/>
        </div>
        <div className="justify-content-center">
          <div className={"bubble scaleX2"}/>
        </div>
        <div>
          <div className={"bubble scaleX1"}/>
        </div>
        <div>
          <div className={"bubble"}/>
        </div>
        <div>
          <div className={"bubble scaleX2"}/>
          <div className={"bubble scaleX1"}/>
        </div>
        <div className="m-auto">
          <div className={"bubble scaleX3 lg"}/>
          <div className={"bubble scaleX2"}/>
        </div>
        <div className="m-auto">
          <div className={"bubble scaleX1"}/>
        </div>
        <div className="m-auto">
          <div className={"bubble"}/>
        </div>
      </div>
    </div>
  )
}

export default Bubble
