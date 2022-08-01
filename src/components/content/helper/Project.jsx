import React from 'react'

const Project = ({
    imageSrc,
    alt = 'no text',
    children,
    title = 'default title',
    href = '#',
    website = 'www.default.de'
}
) => {
    return (
        <div className="project">
            <img
                className="project_image"
                src={imageSrc}
                alt={alt}
                href={href}
                website={website}
            />
            <p className="project_text">
                <h4>{title}
                    <a className='project_website' href={href} target='_blank' rel="noreferrer">{website}</a>
                </h4>
                {children}
            </p>
        </div>
    )
}

export default Project