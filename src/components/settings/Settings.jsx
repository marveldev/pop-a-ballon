import { AnimatePresence, motion } from 'framer-motion'

const Settings = ({ setIsSettings }) => {
  return (
    <>
      <AnimatePresence>
        <div className={"overlay position-fixed w-100 h-100"}>
          <motion.div
            className={"settings position-absolute text-center rounded"}
            initial={{ scale: 0.7, y:-200 }}
            animate={{ scale: [0.7, 1.5, 1], y: 200}}
            transition={{ duration: 0.8 }}
          >
            <p>hey</p>
            <button onClick={() => setIsSettings(false)}>close</button>
          </motion.div>
        </div>
      </AnimatePresence>
    </>
  )
}

export default Settings
