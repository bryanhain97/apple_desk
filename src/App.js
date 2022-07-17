import './index.sass';
import Tab from './components/Tab'
import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { ImFinder } from 'react-icons/im'

function App() {
  const [open, setOpen] = useState(true)
  const buttonRef = useRef(null)
  const buttonText = useRef(null)
  const finderIcon = document.querySelector('.button_tab_icon')

  const variants = {
    tabOpen: { opacity: [0, 0, 0, 1], scale: [0.8, 1] },
    tabClosed: { opacity: [1, 1, 1, 1, 1, 0], scale: 1 }
  }
  const toggleProgram = () => {
    if (finderIcon.classList.contains('clicked') && buttonText.classList.contains('clicked')) {
      finderIcon.classList.remove('clicked')
      buttonText.classList.remove('clicked')
    }
    buttonRef.current.style.cursor = 'progress'
    setTimeout(() => {
      setOpen(true)
      buttonRef.current.style.cursor = 'default'
    }, 160)
  }
  const toggleClicked = () => {
    finderIcon?.classList.toggle('clicked')
    buttonText.current.classList.toggle('clicked')
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
      <button className='button_tab' ref={buttonRef} onClick={toggleClicked} onDoubleClick={toggleProgram}>
        <ImFinder className='button_tab_icon' />
        <span className='button_tab_text' ref={buttonText}>Finder</span>
      </button>
    </div >
  );
}

export default App;
