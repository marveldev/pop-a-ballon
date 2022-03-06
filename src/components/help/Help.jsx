import { motion } from 'framer-motion'

const Help = ({ setGuideModalIsOpen }) => {
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
              onClick={() => setGuideModalIsOpen(false)}
            >
              <i className="material-icons align-middle fs-2">close</i>
            </button>
          </div>

          <div className={"modal-body"}>
            To successfully complete a level,
            you are to pop the required number of bubbles by tapping on the bubbles
            before the countdown ends. Extra points are awarded for any additional bubble you pop.
            Have fun!
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Help
