import React, { useContext } from 'react'
import { ContentContext } from '../Programme'

const Content = ({ children, title, url }) => {
    const current = useContext(ContentContext)

    const dblClickProgram = (e, url) => {
        const textNode = e.currentTarget.children[1]
        textNode.classList.remove('clicked')
        window.open(url)
    }
    const clickProgram = (e) => {
        const gridItems = [...current.current.children]
        const textNodes = gridItems.map(gridItem => gridItem.children[1])
        const textNode = e.currentTarget.children[1]
        textNodes.forEach(currNode => {
            if (currNode.textContent !== textNode.textContent) {
                currNode.classList.remove('clicked')
            }
        })
        textNode.classList.toggle('clicked')
    }

    return (
        <div className="content_item" onClick={clickProgram} onDoubleClick={(e) => dblClickProgram(e, url)}>
            {children}
            <span className='content_name'>
                {title}
            </span>
        </div>
    )
}

export default Content