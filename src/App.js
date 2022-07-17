import './index.sass';
import Tab from './components/Tab'
import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { ImFinder } from 'react-icons/im'

function App() {
  const [open, setOpen] = useState(true)
  const finderRef = useRef(null)
  const variants = {
    tabOpen: { opacity: [0, 0, 0, 1], scale: [0.8, 1] },
    tabClosed: { opacity: [1, 1, 1, 1, 1, 0], scale: 1 }
  }
  const toggleProgram = () => {
    finderRef.current.style.cursor = 'progress'
    setTimeout(() => {
      setOpen(true)
      finderRef.current.style.cursor = 'default'
    }, 120)
  }
  return (
    <div className="App">
      <motion.div
        variants={variants}
        animate={open ? 'tabOpen' : 'tabClosed'}
        transition={{ duration: 0.5 }}
      >
        <Tab setOpen={setOpen} />
      </motion.div>
      <button className='button_tab' ref={finderRef} onDoubleClick={toggleProgram}>
        <ImFinder className='button_tab_icon' />
      </button>
    </div >
  );
}

export default App;
