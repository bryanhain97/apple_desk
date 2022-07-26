import React, { useRef, useContext } from 'react'
import { ImFinder } from 'react-icons/im'
import { LoginContext } from '../App'

const FinderButton = ({ open, showText = true }) => {
    const { setOpen } = useContext(LoginContext)
    const buttonRef = useRef(null)
    const buttonText = useRef(null)
    const finderIcon = document.querySelector('.button_tab_icon')

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
        <button className={`button_tab ${open ? 'opened' : null}`}
            ref={buttonRef}
            onClick={toggleClicked}
            onDoubleClick={toggleProgram}
        >
            <ImFinder className='button_tab_icon' />
            <span className='button_tab_text' ref={buttonText}>{showText && 'Finder'}</span>
        </button>
    )
}

export default FinderButton