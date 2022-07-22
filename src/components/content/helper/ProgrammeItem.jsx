import React, { useContext, useRef } from 'react'
import { ContentContext } from '../Programme'
import { motion } from 'framer-motion'

const Content = ({ children, title, url, experience }) => {
    const current = useContext(ContentContext)
    const tooltipRef = useRef(null)


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
            if (currNode?.textContent !== textNode?.textContent) {
                currNode.classList.remove('clicked')
            }
        })
        textNode.classList.toggle('clicked')
    }
    const showTooltip = () => tooltipRef.current.classList.add('show')
    const hideTooltip = () => tooltipRef.current.classList.remove('show')
    return (
        <motion.div
            drag
            dragMomentum={false}
            dragConstraints={{ left: -10, right: 10, top: 10, bottom: -10 }}
            className="content_item"
            onClick={clickProgram}
            onDoubleClick={(e) => dblClickProgram(e, url)}
            onMouseEnter={showTooltip}
            onMouseLeave={hideTooltip}
        >
            {children}
            <span className='content_name'>
                {title}
            </span>
            <span className='content_tooltip' ref={tooltipRef}>
                <p>Experience
                    <span>{experience}</span>
                </p>
            </span>
        </motion.div>
    )
}

export default Content