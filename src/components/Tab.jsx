import React, { useState, useId, useEffect, useRef } from 'react'
import { GiCrossedAirFlows } from 'react-icons/gi'
import { CgDesktop } from 'react-icons/cg'
import { IoDocumentOutline } from 'react-icons/io5'
import { IoMdCloudOutline, IoMdWifi } from 'react-icons/io'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { MdDownloading, MdOutlineFolderShared } from 'react-icons/md'
import { motion } from 'framer-motion'
import Content from './Content'
import ListItemHeader from './ListItemHeader'

const Tab = ({ setOpen, open }) => {
    // const [prevSelected, setPrevSelected] = useState(null)
    const [currentSelected, setCurrentSelected] = useState('Programme')
    const [tabNormal, setTabNormal] = useState(true)
    const listItems = useRef(null)
    const tabRef = useRef(null)
    const variants = {
        tab_large: { scale: 1.45 },
        tab_normal: { scale: 1 }
    }
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
    const resizeTab = () => {
        setTabNormal(!tabNormal)
    }

    return (
        <motion.div
            drag
            dragMomentum={false}
            variants={variants}
            animate={tabNormal ? 'tab_normal' : 'tab_large'}
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
                        <li className="sidebar_list_item favorite_item selected" id={useId()} onClick={selectListItem}>
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
                    <button>
                        <BsChevronLeft className='button_chevron' />
                    </button>
                    <button>
                        <BsChevronRight className='button_chevron' />
                    </button>
                    <h4 className='content_title'>{currentSelected}</h4>
                </div>
                <div className="content_main">
                    <Content currentSelected={currentSelected} />
                </div>
            </div>
        </motion.div >
    )
}
export default Tab