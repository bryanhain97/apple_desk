import React from 'react'
import Project from './helper/Project'

const Content = () => {
    return (
        <div className="schreibtisch_container">
            <h2 className="title">projects</h2>
            <div className="projects">
                <Project />
                <Project />
                <Project />
                <Project />
                <Project />
                <Project />
            </div>
        </div>
    )
}

export default Content