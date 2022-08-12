import React, { useState, useId, useEffect, useRef, useContext } from 'react'
import { GiCrossedAirFlows } from 'react-icons/gi'
import { CgDesktop } from 'react-icons/cg'
import { IoDocumentOutline } from 'react-icons/io5'
import { IoMdCloudOutline, IoMdWifi } from 'react-icons/io'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { MdDownloading, MdOutlineFolderShared } from 'react-icons/md'
import { motion } from 'framer-motion'
import Content from './Content'
import ListItemHeader from './ListItemHeader'
import { LoginContext } from '../App.js'


const Tab = () => {
    const { open, setOpen } = useContext(LoginContext)
    const [prevSelected, setPrevSelected] = useState(null)
    const [currentSelected, setCurrentSelected] = useState('Programme')
    const [nextSelected, setNextSelected] = useState(null)
    const [tabNormal, setTabNormal] = useState(true)

    const sideBarItems = useRef(null)
    const tabRef = useRef(null)
    const variants = {
        tabLarge: { scale: 1.45 },
        tabNormal: { scale: 1 },
        tabOpen: { opacity: [0, 0, 0, 1], scale: [0.8, 1] },
        tabClosed: { opacity: [1, 1, 1, 0] }
    }

    useEffect(() => {
        sideBarItems.current = [...document.querySelectorAll('li.sidebar_list_item')]
        sideBarItems.current.forEach(node => node.classList.remove('selected'))
        const selection = sideBarItems.current.find(node => node.textContent === currentSelected)
        selection.classList.add('selected')
    }, [currentSelected])

    const selectListItem = (e) => {
        const selectText = e.currentTarget.children[1]
        setPrevSelected(currentSelected)
        setCurrentSelected(e.currentTarget.innerText)
        selectText.classList.add('selected')
    }
    const unmountComponent = () => {
        setOpen(false)
        setTabNormal(true)
    }
    const resizeTab = () => {
        setTabNormal(!tabNormal)
    }
    const selectPreviousItem = () => {
        if (prevSelected !== currentSelected && prevSelected) {
            setCurrentSelected(prevSelected)
            setNextSelected(currentSelected)
        }
        return
    }
    const selectNextItem = () => {
        if (nextSelected !== currentSelected && nextSelected) {
            setCurrentSelected(nextSelected)
            setPrevSelected(currentSelected)
        }
    }
    return (
        <motion.div
            variants={variants}
            animate={open ? 'tabOpen' : 'tabClosed'}
            transition={{ duration: 0.5 }}
        >
            <motion.div
                drag
                dragMomentum={false}
                variants={variants}
                animate={tabNormal ? 'tabNormal' : 'tabLarge'}
                whileTap={{ cursor: "grabbing" }}
                dragConstraints={{ left: -450, right: 450, top: -200, bottom: 200 }}
                ref={tabRef}
                className={open ? 'tab' : 'tab closed'}
            >
                <div className='sidebar'>
                    <div className='sidebar_head'>
                        <button className="sidebar_button_close" onClick={unmountComponent}></button>
                        <button className="sidebar_button_hide"></button>
                        <button className="sidebar_button_resize" onClick={resizeTab}></button>
                    </div>
                    <div className="sidebar_main">
                        <ListItemHeader title='Favoriten' />
                        <ul id='favorite_list'>
                            <li className="sidebar_list_item favorite_item" id={useId()} onClick={selectListItem}>
                                <IoMdWifi className="favorite_item_icon" />
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
                        <button className='content_button_prev' onClick={selectPreviousItem}>
                            <BsChevronLeft className={prevSelected !== currentSelected && prevSelected ? 'button_chevron clickable' : 'button_chevron'} />
                        </button>
                        <button className='content_button_next' onClick={selectNextItem}>
                            <BsChevronRight className={nextSelected !== currentSelected && nextSelected ? 'button_chevron clickable' : 'button_chevron'} />
                        </button>
                        <h4 className='content_title'>{currentSelected}</h4>
                    </div>
                    <div className="content_main">
                        <Content currentSelected={currentSelected} />
                    </div>
                </div>
            </motion.div >
        </motion.div>
    )
}
export default Tab