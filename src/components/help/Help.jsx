import { motion } from 'framer-motion'

const Help = ({ setIsGuide }) => {
  return (
    <div className={"overlay position-fixed w-100 h-100"}>
      <motion.div
        className={"guide card position-absolute rounded"}
        initial={{ scale: 0.7, y:-200 }}
        animate={{ scale: [0.7, 1.5, 1], y: 200}}
        transition={{ duration: 0.8 }}
      >
        <div className="card-header d-flex align-items-center">
          <h3>How to play</h3>
          <button
            className="btn-close"
            aria-label="close"
            onClick={() => setIsGuide(false)}
          />
        </div>

        <div className={"text-center p-3"}>
          how to play
        </div>
      </motion.div>
    </div>
  )
}

export default Help
