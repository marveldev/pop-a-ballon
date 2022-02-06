const Home = () => {
  return (
    <div>
      <div className={"wallpaper position-absolute w-100 h-100"}/>
      <div className={"home-buttons position-absolute translate-middle text-center w-100"}>
        <button className={"btn"}>Statistics</button>
        <button className={"btn mx-4 fs-2"}>Play</button>
        <button className={"btn"}>Guide</button>
      </div>
    </div>
  )
}

export default Home
