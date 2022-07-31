import React, { useRef, useState } from 'react'
import DownloadItem from './helper/DownloadItem'
import DOWNLOADS from './json/downloads.json'


const Content = () => {
    const ref = useRef(null)
    const [listItems, setListItems] = useState(Object.values(DOWNLOADS))

    const removeAllSelections = () => {
        for (let item of ref.current.children) {
            item.classList.remove('selected')
        }
    }

    return (
        <div className='downloads_list'>
            <div className="downloads_list_categories">
                <span>Name</span>
                <span>Type</span>
                <span>Category</span>
                <span>File Size</span>
            </div>
            <div className="downloads_list_items" ref={ref}>
                {listItems && listItems.map(
                    ({
                        name,
                        href,
                        type,
                        file_size,
                        category
                    }, key) => (
                        <DownloadItem
                            key={key}
                            name={name}
                            href={href}
                            type={type}
                            file_size={file_size}
                            category={category}
                        />
                    ))
                }
            </div>
            <div onClick={removeAllSelections} className="downloads_list_filler"></div>
        </div>
    )
}

export default Content