import { motion } from 'framer-motion'

const Home = ({ setIsSettings, setIsGuide }) => {
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
        className={"ball-bg-top"}
        initial={{ x: 200 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      />

      <motion.div
        className={"ball-bg-bottom"}
        initial={{ x: -200 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      />

      <div className={"home-text position-fixed text-center"}>
        <p className={"name lh-1"}>Ball Pop</p>

        <div className={"d-flex justify-content-center gap-4"}>
          <button
            className={"btn bg-success text-white"}
            onClick={() => setIsSettings(true)}
          >
            Statistics
          </button>
          <button className={"btn btn-lg bg-success text-white"}>Play</button>
          <button
            className={"btn bg-success text-white"}
            onClick={() => setIsGuide(true)}
          >
            Guide
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default Home
