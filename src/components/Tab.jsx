import React, { useState, useId } from 'react'
import { BiCrosshair } from 'react-icons/bi'
import { GiCrossedAirFlows } from 'react-icons/gi'
import { CgDesktop } from 'react-icons/cg'
import { IoDocumentOutline } from 'react-icons/io5'
import { MdDownloading } from 'react-icons/md'
import { motion } from 'framer-motion'
import Content from './Content'

const Tab = () => {
    const [currentSelected, setCurrentSelected] = useState('AirDrop')

    const selectListItem = (e) => {
        const listItems = [...document.querySelectorAll('li.favorite_item')]
        listItems.forEach(listItem => listItem.classList.remove('selected'))
        const clickedItem = listItems.find(item => item.id === e.currentTarget.id)
        clickedItem.classList.add('selected')
        setCurrentSelected(e.currentTarget.innerText)
    }

    return (
        <motion.div
            className='tab'
            animate={{
                scale: [0, 1.02, 1],
                opacity: [0, 1],
            }}
        >
            <div className='sidebar'>
                <div className='sidebar_head'>
                    <button className="sidebar_button_close"></button>
                    <button className="sidebar_button_hide"></button>
                    <button className="sidebar_button_resize"></button>
                </div>
                <div className="sidebar_main">
                    <h5>Favoriten</h5>
                    <ul>
                        <li className="favorite_item" id={useId()} onClick={selectListItem}>
                            <BiCrosshair className="favorite_item_icon" />
                            <span className="favorite_item_text">AirDrop</span>
                        </li>
                        <li className="favorite_item" id={useId()} onClick={selectListItem}>
                            <GiCrossedAirFlows className="favorite_item_icon" />
                            <span className="favorite_item_text">Programme</span>
                        </li>
                        <li className="favorite_item" id={useId()} onClick={selectListItem}>
                            <CgDesktop className="favorite_item_icon" />
                            <span className="favorite_item_text">Schreibtisch</span>
                        </li>
                        <li className="favorite_item" id={useId()} onClick={selectListItem}>
                            <IoDocumentOutline className="favorite_item_icon" />
                            <span className="favorite_item_text">Dokumente</span>
                        </li>
                        <li className="favorite_item" id={useId()} onClick={selectListItem}>
                            <MdDownloading className="favorite_item_icon" />
                            <span className="favorite_item_text">Downloads</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='content'>
                <div className="content_head">
                    {currentSelected}
                </div>
                <div className="content_main">
                    <Content currentSelected={currentSelected} />
                </div>
            </div>
        </motion.div >
    )
}
export default Tab