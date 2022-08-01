import React, { useRef } from 'react'
import memoji from '../img/bryan_memoji_alpha.png'
import { motion } from 'framer-motion'

const Login = ({ setLoggedIn }) => {
    const loginRef = useRef(null)


    const logIn = () => {
        const hideLogin = new Promise((resolve) => {
            loginRef.current.classList.add('loggedIn')
            setTimeout(() => {
                loginRef.current.remove()
                resolve()
            }, 550)
        })
        hideLogin.then(() => {
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