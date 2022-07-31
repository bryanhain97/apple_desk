import React from 'react'

const Project = ({ imageSrc, alt = 'no text', children, title = 'default title' }) => {
    return (
        <div className="project">
            <img
                className="project_image"
                src={imageSrc}
                alt={alt}
            />
            <p className="project_text">
                <h4>{title}</h4>
                {children}
            </p>
        </div>
    )
}

export default Project