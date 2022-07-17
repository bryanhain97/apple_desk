import React, { useState, useId, useEffect, useRef } from 'react'
import { BiCrosshair } from 'react-icons/bi'
import { GiCrossedAirFlows } from 'react-icons/gi'
import { CgDesktop } from 'react-icons/cg'
import { IoDocumentOutline } from 'react-icons/io5'
import { IoMdCloudOutline } from 'react-icons/io'
import { MdDownloading, MdOutlineFolderShared } from 'react-icons/md'
import { motion } from 'framer-motion'
import Content from './Content'
import ListItemHeader from './ListItemHeader'

const Tab = ({ setOpen, open }) => {
    const [currentSelected, setCurrentSelected] = useState('AirDrop')

    const listItems = useRef(null)
    const tabRef = useRef(null)

    useEffect(() => {
        listItems.current = [...document.querySelectorAll('li.sidebar_list_item')]
    }, [])

    const selectListItem = (e) => {
        listItems.current.forEach(listItem => listItem.classList.remove('selected'))
        const clickedItem = listItems.current.find(item => item.id === e.currentTarget.id)
        clickedItem.classList.add('selected')
        setCurrentSelected(e.currentTarget.innerText)
    }
    const unmountComponent = () => setOpen(false)

    return (
        <motion.div
            drag
            dragMomentum={false}
            whileTap={{ cursor: "grabbing" }}
            dragConstraints={{ left: -450, right: 450, top: -200, bottom: 200 }}
            ref={tabRef}
            className={open ? 'tab' : 'tab closed'}
        >
            <div className='sidebar'>
                <div className='sidebar_head'>
                    <button className="sidebar_button_close" onClick={unmountComponent}></button>
                    <button className="sidebar_button_hide"></button>
                    <button className="sidebar_button_resize"></button>
                </div>
                <div className="sidebar_main">
                    <ListItemHeader title='Favoriten' />
                    <ul id='favorite_list'>
                        <li className="sidebar_list_item favorite_item" id={useId()} onClick={selectListItem}>
                            <BiCrosshair className="favorite_item_icon" />
                            <span className="favorite_item_text">AirDrop</span>
                        </li>
                        <li className="sidebar_list_item favorite_item" id={useId()} onClick={selectListItem}>
                            <GiCrossedAirFlows className="favorite_item_icon" />
                            <span className="favorite_item_text">Programme</span>
                        </li>
                        <li className="sidebar_list_item favorite_item" id={useId()} onClick={selectListItem}>
                            <CgDesktop className="favorite_item_icon" />
                            <span className="favorite_item_text">Schreibtisch</span>
                        </li>
                        <li className="sidebar_list_item favorite_item" id={useId()} onClick={selectListItem}>
                            <IoDocumentOutline className="favorite_item_icon" />
                            <span className="favorite_item_text">Dokumente</span>
                        </li>
                        <li className="sidebar_list_item favorite_item" id={useId()} onClick={selectListItem}>
                            <MdDownloading className="favorite_item_icon" />
                            <span className="favorite_item_text">Downloads</span>
                        </li>
                    </ul>
                    <ListItemHeader title='iCloud' />
                    <ul id='cloud-list'>
                        <li className="sidebar_list_item cloud_item" id={useId()} onClick={selectListItem}>
                            <IoMdCloudOutline className="cloud_item_icon" />
                            <span className="cloud_item_text" >iCloud Drive</span>
                        </li>
                        <li className="sidebar_list_item cloud_item" id={useId()} onClick={selectListItem}>
                            <MdOutlineFolderShared className="cloud_item_icon" />
                            <span className="cloud_item_text">Geteilt</span>
                        </li>
                    </ul>
                    <ListItemHeader title='Orte' />
                    <ul id='orte-list'>
                        <li className="sidebar_list_item orte_item" id={useId()} onClick={selectListItem}>
                            <IoMdCloudOutline className="orte_item_icon" />
                            <span className="orte_item_text" >Update</span>
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