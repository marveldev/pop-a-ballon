import { motion } from 'framer-motion'

const Statistics = ({ setIsSettings }) => {
  return (
    <div className={"overlay position-fixed w-100 h-100"}>
      <motion.div
        className={"settings card position-absolute rounded"}
        initial={{ scale: 0.7, y:-200 }}
        animate={{ scale: [0.7, 1.5, 1], y: 200}}
        transition={{ duration: 0.8 }}
      >
        <div className="card-header d-flex align-items-center">
          <h3>Statistics</h3>
          <button
            className="btn-close"
            aria-label="close"
            onClick={() => setIsSettings(false)}
          />
        </div>

        <div className={"text-center p-3"}>
          <div className={"my-3 fs-5"}>
            <span className={"fw-bold"}>Highest score:</span> 0
          </div>
          <div className={"my-4 fs-5"}>
            <span className={"fw-bold"}>Your score:</span> 0
          </div>
          <button className={"btn btn-primary w-50"}>Reset</button>
        </div>
      </motion.div>
    </div>
  )
}

export default Statistics
