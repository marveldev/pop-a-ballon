import './bubble.scss'

const Bubble = () => {
  const data = ['b-one jcc', 'b-two', 'b-three jcc', 'b-four', 'b-five', 'b-six', 'b-seven jcr', 'b-eight jcr', 'b-nine']
  const width = window.innerWidth
  console.log(width)

  return (
    <div className={"bubble-wrap"}>
      <div className={"header fw-bold d-flex justify-content-between"}>
        <p>Level <span>One</span></p>
        <p>Count Down: <span className={"fw-normal"}>00:00:00</span></p>
        <p>Balls Popped: <span className={"fw-normal"}>0</span></p>
      </div>

      <div className="content">
        <div className="justify-content-center">
          <div className={"bubble"}/>
        </div>
        <div className="m-auto">
          <div className={"bubble scalex3"}/>
          <div className={"bubble scalex1"}/>
        </div>
        <div className="justify-content-center">
          <div className={"bubble scalex2"}/>
        </div>
        <div className="">
          <div className={"bubble scalex1"}/>
        </div>
        <div className="">
          <div className={"bubble"}/>
        </div>
        <div className="">
          <div className={"bubble scalex2"}/>
          <div className={"bubble scalex1"}/>
        </div>
        <div className="m-auto">
          <div className={"bubble scalex3"}/>
          <div className={"bubble scalex2"}/>
        </div>
        <div className="m-auto">
          <div className={"bubble scalex1"}/>
        </div>
        <div className="m-auto">
          <div className={"bubble"}/>
        </div>
      </div>
    </div>
  )
}

export default Bubble
