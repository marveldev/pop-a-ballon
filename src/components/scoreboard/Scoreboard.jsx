import { motion } from 'framer-motion'

const Scoreboard = ({ setIsSettings }) => {
  return (
    <div className={"overlay position-fixed w-100 h-100"}>
      <motion.div
        className={"dashboard modal-dialog rounded"}
        initial={{ scale: 0.7, y:-200 }}
        animate={{ scale: [0.7, 1.5, 1], y: 200}}
        transition={{ duration: 0.8 }}
      >
        <div className="modal-content pb-2">
          <div className="modal-header">
            <h3>Scoreboard</h3>
            <button
              className={"btn p-0"}
              aria-label="close"
              onClick={() => setIsSettings(false)}
            >
              <i className="material-icons align-middle fs-2">close</i>
            </button>
          </div>

          <div className={"modal-body text-center"}>
            <div className={"fs-5"}>
              <span className={"fw-bold"}>Latest score:</span> 0
            </div>
            <div className={"my-3 fs-5"}>
              <span className={"fw-bold"}>Highest score:</span> 0
            </div>
            <button className={"btn btn-success w-50"}>Reset</button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Scoreboard
