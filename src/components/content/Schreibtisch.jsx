import React from 'react'
import Project from './helper/Project'
import rtfFish from '../../img/rtf_fish.png'

const Content = () => {
    return (
        <div className="schreibtisch_container">
            <h2 className="title">projects</h2>
            <div className="projects">
                <Project
                    imageSrc={rtfFish}
                    alt='react three fiber fish'
                    title='R3F Fish'
                >
                    react three fiber fish
                </Project>
                <Project>
                    project2 text
                </Project>
            </div>
        </div>
    )
}

export default Content