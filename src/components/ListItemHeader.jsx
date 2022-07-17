import React, { useState } from 'react'
import { BsChevronDown, BsChevronRight } from 'react-icons/bs'


const ListItemHeader = ({ title }) => {

    const [hide, setHide] = useState(false)
    const toggleHide = (e) => {
        e.currentTarget.classList.toggle('hide')
        const currentList = e.currentTarget.nextSibling
        currentList.classList.toggle('hide')
        if (e.currentTarget.classList.contains('hide')) {
            setHide(true)
        } else {
            setHide(false)
        }
    }
    return (
        <h5 onClick={toggleHide}>
            {title}
            {hide ?
                <BsChevronRight className='list_header_icon' /> :
                <BsChevronDown className='list_header_icon' />
            }
        </h5>
    )
}
export default ListItemHeader
