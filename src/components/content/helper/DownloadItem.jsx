import React, { useRef } from 'react'


const DokumenteItem = (
    {
        name = 'default name',
        type = 'type',
        file_size = '0 KB',
        href = '#',
        category = 'Lebenslauf',
    }
) => {
    const downloadRef = useRef(null)
    const clickDownloadItem = (e) => {
        for (let downloadItem of e.currentTarget.parentNode.children) {
            downloadItem.classList.remove('selected')
        }
        e.currentTarget.classList.add('selected')
    }
    const downloadItem = () => {
        downloadRef.current.click()
    }
    return (
        <div
            onClick={clickDownloadItem}
            onDoubleClick={downloadItem}
            className='downloads_list_item'
            href={href}
        >
            <span className='item_name'>{name}</span>
            <span className='item_type'>{type}</span>
            <span className='item_category'>{category}</span>
            <span className='item_file_size'>{file_size}</span>
            <a href={href} ref={downloadRef} className='item_download' download >{''}</a>
        </div>
    )
}

export default DokumenteItem