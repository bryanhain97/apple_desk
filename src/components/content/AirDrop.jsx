import React, { useState } from 'react'
import { IoMdWifi } from 'react-icons/io'
import phoneImage from '../../img/iphone_bryan.jpg'
import { motion } from 'framer-motion'

const Content = () => {
    const [hovered, setHovered] = useState(false)
    const delayOfMount = Math.random() * 1.2 + 0.25
    return (
        <>
            <IoMdWifi className='airdrop_content_icon' />
            <p className='subtitle'>Mit AirDrop Dateien sofort mit anderen in der Nähe teilen.</p>
            <p className='subtitle_visibility'>Nur sichtbar für Arbeitgeber.</p>
            <span className="wifi_circle"></span>
            <span className="wifi_circle"></span>
            <span className="wifi_circle"></span>
            <span className="wifi_circle"></span>
            <span className="wifi_circle"></span>
            <motion.div
                animate={{ opacity: [0, 1] }}
                transition={{ duration: 0.1, delay: delayOfMount }}
                className='iphone'
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <img
                    className='iphone_img'
                    src={phoneImage}
                    alt="iphone von bryan" />
                <span className='iphone_text'>
                    Bryan Hain
                    <span className='iphone_type'>
                        iPhone
                    </span>
                    {hovered &&
                        <motion.span
                            animate={{ opacity: [0, 1] }}
                            transition={{ duration: 0.15 }}
                            className='iphone_number'
                        >
                            +49 1627236796
                        </motion.span>
                    }
                </span>
                <motion.span
                    animate={{ scale: [0.5, 1.75], opacity: [1, 0] }}
                    transition={{ duration: 0.65, delay: delayOfMount, repeat: 2 }}
                    className="iphone_signal"
                >
                </motion.span>
            </motion.div>
        </>
    )
}

export default Content