import React from 'react'
import Project from './helper/Project'
import rtfFish from '../../img/rtf_fish.png'
import wireframe from '../../img/wireframe.png'
import portfolio from '../../img/portfolio.png'

const Content = () => {
    return (
        <div className="schreibtisch_container">
            <h2 className="title">projects</h2>
            <div className="projects">
                <Project
                    imageSrc={rtfFish}
                    alt='react three fiber fish'
                    title='3D Fish'
                    href='https://3dfish-threejs.netlify.app'
                    website='3dfish-threejs.netlify.app'
                >
                    Implemented a 3D model in a website. Technologies i used include React, React-three-fiber and Three.js
                </Project>
                <Project
                    imageSrc={wireframe}
                    alt='wireframe threejs'
                    title='Wireframe'
                    href='https://wireframe-threejs.netlify.app'
                    website='wireframe-threejs.netlify.app'
                >
                    A wireframe of a 3D torusknot. Learned in the Three.js course of Bruno Simon.
                </Project>
                <Project
                    imageSrc={portfolio}
                    alt='portfolio'
                    title='Portfolio Website'
                    href='https://www.thatguybryan.com/'
                    website='thatguybryan.com'
                >
                    My personal portfolio website, which is still in development. Technologies i used to create this website include React, Three.js and Blender.
                </Project>
                <Project>
                    project2 text
                </Project>
            </div>
        </div>
    )
}

export default Content