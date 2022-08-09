import React, { useRef } from 'react'
import memoji from '../img/bryan_memoji_alpha.png'
import { motion } from 'framer-motion'
import macStartupSound from '../sound/mac_startup.mp3'

const LOGIN_DELAY = 0.9 // login nach 0.45s nach klick
const startUpSound = new Audio(macStartupSound)
startUpSound.volume = 0.05
startUpSound.playbackRate = 1

const Login = ({ setLoggedIn }) => {
    const loginRef = useRef(null)
    console.dir(startUpSound)

    const logIn = () => {
        const hideLogin = new Promise((resolve) => {
            loginRef.current.classList.add('loggedIn')
            setTimeout(() => {
                loginRef.current.remove()
                resolve()
            }, LOGIN_DELAY * 1000)
        })
        hideLogin.then(() => {
            startUpSound.play()
            setLoggedIn(true)
        })
    }

    return (
        <motion.div
            className="login"
            ref={loginRef}
        >
            <div className='user' onClick={logIn} >
                <img src={memoji} alt="memoji" className="user_img" />
                <span className='user_name'>Bryan Hain</span>
            </div>
        </motion.div>
    )
}

export default Login