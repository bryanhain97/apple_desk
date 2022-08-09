import React, { useState, useEffect, useCallback } from 'react'
import ContentItem from '../components/content/helper/ProgrammeItem'
import { motion } from 'framer-motion'
import {
    SiTypescript,
    SiJavascript,
    SiBlender,
    SiDiscord,
    SiHtml5,
    SiCss3,
    SiReact,
    SiJest,
    SiTestinglibrary,
    SiGit,
    SiThreedotjs,
    SiSass,
    SiMongodb,
    SiJira,
    SiPython,
    SiNpm,
    SiNodedotjs
} from 'react-icons/si'

const Dock = () => {
    const [mousePosition, setMousePos] = useState({ y: null })
    const updateMousePos = useCallback(e => {
        setMousePos({ y: e.clientY / window.innerHeight })
    }, [setMousePos])

    useEffect(() => {
        window.addEventListener('mousemove', updateMousePos)
        return () => window.removeEventListener('mousemove', updateMousePos)
    }, [updateMousePos])

    return (
        <motion.div
            className="dock_container"
            animate={mousePosition.y >= 0.9 ? { y: -100 } : null}
            transition={{ duration: 0.3, delay: 0.2 }}
        >
            <div className="dock_programme">
                <ContentItem
                    title='TypeScript'
                    url='https://www.typescriptlang.org/'
                >
                    <SiTypescript className='content_icon typescript_icon' />
                </ContentItem>
                <ContentItem
                    title='JavaScript'
                    url='https://www.javascript.com/'
                >
                    <SiJavascript className='content_icon javascript_icon' />
                </ContentItem>
                <ContentItem
                    title='Blender'
                    url='https://www.blender.org/'
                >
                    <SiBlender className='content_icon blender_icon' />
                </ContentItem>
                <ContentItem
                    title='CSS'
                    url='https://de.wikipedia.org/wiki/Cascading_Style_Sheets'
                >
                    <SiCss3 className='content_icon css_icon' />
                </ContentItem>
                <ContentItem
                    title='HTML'
                    url='https://html.com/'
                >
                    <SiHtml5 className='content_icon html_icon' />
                </ContentItem>
                <ContentItem
                    title='React'
                    url='https://reactjs.org/'
                >
                    <SiReact className='content_icon react_icon' />
                </ContentItem>
                <ContentItem
                    title='Sass'
                    url='https://sass-lang.com/'
                >
                    <SiSass className='content_icon sass_icon' />
                </ContentItem>
                <ContentItem
                    title='Jira'
                    url='https://www.atlassian.com/software/jira'
                >
                    <SiJira className='content_icon jira_icon' />
                </ContentItem>
                <ContentItem
                    title='Testing Library'
                    url='https://testing-library.com'
                >
                    <SiTestinglibrary className='content_icon tlr_icon' />
                </ContentItem>
                <ContentItem
                    title='Git'
                    url='https://git-scm.com/'
                >
                    <SiGit className='content_icon git_icon' />
                </ContentItem>
                <ContentItem
                    title='Three.js'
                    url='https://threejs.org/'
                >
                    <SiThreedotjs className='content_icon threedotjs_icon' />
                </ContentItem>
                <ContentItem
                    title='MongoDB'
                    url='https://www.mongodb.com/' >
                    <SiMongodb className='content_icon mongodb_icon' />
                </ContentItem>
                <ContentItem
                    title='Discord'
                    url='https://discord.com/'
                >
                    <SiDiscord className='content_icon discord_icon' />
                </ContentItem>
                <ContentItem
                    title='Python'
                    url='https://www.python.org/'
                >
                    <SiPython className='content_icon python_icon' />
                </ContentItem>
                <ContentItem
                    title='Jest'
                    url='https://jestjs.io/'
                >
                    <SiJest className='content_icon jest_icon' />
                </ContentItem>
                <ContentItem
                    title='NPM'
                    url='https://www.npmjs.com/'
                >
                    <SiNpm className='content_icon npm_icon' />
                </ContentItem>
                <ContentItem
                    title='Node.js'
                    url='https://nodejs.org/en/'
                >
                    <SiNodedotjs className='content_icon nodedotjs_icon' />
                </ContentItem>
            </div>
        </motion.div>
    )
}

export default Dock