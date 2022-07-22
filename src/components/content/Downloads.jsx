import React from 'react'
import DownloadItem from './helper/DownloadItem'
import DOWNLOADS from './json/downloads.json'


const Content = () => {

    const removeAllSelections = () => {
        document
            .querySelectorAll('.downloads_list_item')
            .forEach(list_item => list_item.classList.remove('selected'))
    }

    return (
        <div className='downloads_list'>
            <div className="downloads_list_categories">
                <span>Name</span>
                <span>Type</span>
                <span>Category</span>
                <span>File Size</span>
            </div>
            <div className="downloads_list_items">
                {Object.entries(DOWNLOADS).map(
                    ([key, {
                        name,
                        href,
                        type,
                        file_size,
                        category
                    }]) => (
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