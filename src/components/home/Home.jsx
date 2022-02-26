import { motion } from 'framer-motion'
import './home.scss'

const Home = ({ setIsSettings, setIsGuide, setUserIsPlaying }) => {
  return (
    <motion.div
      className={"home"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className={"ring-bg-top"}
        initial={{ x: -200 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      />

      <motion.div
        className={"ring-bg-bottom"}
        initial={{ x: 200 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      />

      <motion.div
        className={"bubble-bg-top"}
        initial={{ x: 200 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      />

      <motion.div
        className={"bubble-bg-bottom"}
        initial={{ x: -200 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      />

      <div className={"home-text position-fixed text-center"}>
        <p className={"name lh-1"}>Bubble Pop</p>

        <div className={"d-flex justify-content-center gap-4"}>
          <button
            className={"btn rounded-circle text-white p-0"}
            onClick={() => setIsSettings(true)}
          >
            <i className="material-icons align-middle fs-1">dashboard</i>
          </button>

          <button
            className={"btn rounded-circle text-white p-0"}
            onClick={() => setUserIsPlaying(true)}
          >
            <i className="material-icons align-middle fs-1">play_arrow</i>
          </button>

          <button
            className={"btn rounded-circle text-white p-0"}
            onClick={() => setIsGuide(true)}
          >
            <i className="material-icons align-middle fs-1">help</i>
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default Home
