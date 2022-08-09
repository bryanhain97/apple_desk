import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { ImFinder } from 'react-icons/im'
import './index.sass';

import Tab from './components/Tab'
import Dock from './components/Dock'
import Login from './components/Login'


function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [open, setOpen] = useState(false)

  const buttonRef = useRef(null)
  const buttonText = useRef(null)
  const finderIcon = document.querySelector('.button_tab_icon')
  const variants = {
    tabOpen: { opacity: [0, 0, 0, 1], scale: [0.8, 1] },
    tabClosed: { opacity: [1, 1, 1, 0] },
  }

  const toggleProgram = () => {
    finderIcon?.classList.remove('clicked')
    buttonText.current.classList.remove('clicked')
    buttonRef.current.classList.remove('clicked')
    buttonRef.current.style.cursor = 'progress'
    setTimeout(() => {
      setOpen(true)
      buttonRef.current.style.cursor = 'default'
    }, 180)
  }
  const toggleClicked = () => {
    finderIcon?.classList.toggle('clicked')
    buttonText.current.classList.toggle('clicked')
  }

  return (
    <div className="App">
      <Login setLoggedIn={setLoggedIn} />
      {
        loggedIn &&
        <>
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
          <Dock />
        </>
      }
    </div >
  )
}

export default App;
