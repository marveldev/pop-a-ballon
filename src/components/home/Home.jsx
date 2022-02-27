import { useState } from '@hookstate/core'
import { motion } from 'framer-motion'
import store from '../../store'
import './home.scss'

const Home = ({ setGuideModalIsOpen, setUserIsPlaying }) => {
  const { scoreModalIsOpen } = useState(store)

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
            onClick={() => scoreModalIsOpen.set(true)}
          >
            <svg viewBox="0 0 24 24">
              <path fill="currentColor" d="M18 2C17.1 2 16 3 16 4H8C8 3 6.9 2 6 2H2V11C2 12 3 13 4 13H6.2C6.6 15 7.9 16.7 11 17V19.08C8 19.54 8 22 8 22H16C16 22 16 19.54 13 19.08V17C16.1 16.7 17.4 15 17.8 13H20C21 13 22 12 22 11V2H18M6 11H4V4H6V11M20 11H18V4H20V11Z" />
            </svg>
          </button>

          <button
            className={"btn rounded-circle text-white p-0"}
            onClick={() => setUserIsPlaying(true)}
          >
            <i className="material-icons align-middle fs-1">play_arrow</i>
          </button>

          <button
            className={"btn rounded-circle text-white p-0"}
            onClick={() => setGuideModalIsOpen(true)}
          >
            <i className="material-icons align-middle fs-1">help</i>
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default Home
