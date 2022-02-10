const Home = () => {
  return (
    <>
      <div className={"ring-bg-top"} />
      <div className={"ring-bg-bottom"} />
      <div className={"ball-bg-top"} />
      <div className={"ball-bg-bottom"} />

      <div className={"home position-absolute text-center"}>
        <p className={"name lh-1"}>Ball Pop</p>

        <div className={"d-flex justify-content-center gap-4"}>
          <button className={"btn bg-success text-white"}>Statistics</button>
          <button className={"btn btn-lg bg-success text-white"}>Play</button>
          <button className={"btn bg-success text-white"}>Guide</button>
        </div>
      </div>
    </>
  )
}

export default Home
