import './index.sass';
import Tab from './components/Tab'
import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { ImFinder } from 'react-icons/im'

function App() {
  const [open, setOpen] = useState(true)
  const buttonRef = useRef(null)
  const finderIcon = document.querySelector('.button_tab_icon')

  const variants = {
    tabOpen: { opacity: [0, 0, 0, 1], scale: [0.8, 1] },
    tabClosed: { opacity: [1, 1, 1, 1, 1, 0], scale: 1 }
  }
  const toggleProgram = () => {
    buttonRef.current.style.cursor = 'progress'
    finderIcon?.classList.remove('clicked')
    setTimeout(() => {
      setOpen(true)
      buttonRef.current.style.cursor = 'default'
    }, 160)
  }

  return (
    <div className="App">
      <motion.div
        variants={variants}
        animate={open ? 'tabOpen' : 'tabClosed'}
        transition={{ duration: 0.5 }}
      >
        <Tab setOpen={setOpen} open={open} />
      </motion.div>
      <button className='button_tab' ref={buttonRef} onClick={() => finderIcon?.classList.add('clicked')} onDoubleClick={toggleProgram}>
        <ImFinder className='button_tab_icon' />
        <span className='button_tab_name'>Finder</span>
      </button>
    </div >
  );
}

export default App;
