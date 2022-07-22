import React, {
    useRef
} from 'react'


const DokumenteItem = (
    {
        name = 'default name',
        type = 'type',
        file_size = '0 KB',
        href = '#',
        category = 'certificate',
    }
) => {
    const ref = useRef(null)

    const selectItem = (e) => {
        e.preventDefault()
        document.querySelectorAll('a.dokumente_list_item').forEach(node => {
            node.classList.remove('selected')
        })
        e.currentTarget.classList.toggle('selected')
    }
    const downloadSingleItem = (e) => {
        const downloadTag = document.createElement('a')
        e.currentTarget.classList.remove('selected')
        downloadTag.href = e.currentTarget.href
        downloadTag.download = e.currentTarget.children[0].textContent
        console.log(downloadTag.href)
        downloadTag.click()
        downloadTag.remove()
    }
    return (
        <a
            ref={ref}
            onClick={selectItem}
            onDoubleClick={downloadSingleItem}
            className='downloads_list_item'
            href={href}
            download
        >
            <span className='item_name'>{name}</span>
            <span className='item_type'>{type}</span>
            <span className='item_category'>{category}</span>
            <span className='item_file_size'>{file_size}</span>
        </a>
    )
}

export default DokumenteItem