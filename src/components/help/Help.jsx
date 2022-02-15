import { motion } from 'framer-motion'

const Help = ({ setIsGuide }) => {
  return (
    <div className={"overlay position-fixed w-100 h-100"}>
      <motion.div
        className={"help modal-dialog rounded"}
        initial={{ scale: 0.7, y:-200 }}
        animate={{ scale: [0.7, 1.5, 1], y: 200}}
        transition={{ duration: 0.8 }}
      >
        <div className={"modal-content pb-2"}>
          <div className="modal-header">
            <h3>How to play</h3>
            <button
              className={"btn p-0"}
              aria-label="close"
              onClick={() => setIsGuide(false)}
            >
              <i className="material-icons align-middle fs-2">close</i>
            </button>
          </div>

          <div className={"modal-body text-center"}>
            how to play
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Help
