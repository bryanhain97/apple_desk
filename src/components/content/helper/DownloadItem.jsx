import React from 'react'


const DokumenteItem = (
    {
        name = 'default name',
        type = 'type',
        file_size = '0 KB',
        href = '#',
        category = 'Lebenslauf',
    }
) => {
    const downloadItem = (e) => {
        document.querySelectorAll('a.dokumente_list_item').forEach(node => {
            node.classList.remove('selected')
        })
        e.currentTarget.classList.toggle('selected')
    }

    return (
        <a
            download
            onClick={downloadItem}
            className='downloads_list_item'
            href={href}
        >
            <span className='item_name'>{name}</span>
            <span className='item_type'>{type}</span>
            <span className='item_category'>{category}</span>
            <span className='item_file_size'>{file_size}</span>
        </a>
    )
}

export default DokumenteItem