import React, { createContext, useRef } from 'react'
import ContentItem from './helper/ProgrammeItem'
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

export const ContentContext = createContext()

const Content = () => {
    let gridRef = useRef(null)

    return (
        <div
            className='content_grid_container'
            ref={gridRef}
        >
            <ContentContext.Provider value={gridRef}>
                <ContentItem
                    experience='6 months'
                    title='TypeScript'
                    url='https://www.typescriptlang.org/'
                >
                    <SiTypescript className='content_icon typescript_icon' />
                </ContentItem>
                <ContentItem
                    experience='20 months'
                    title='JavaScript'
                    url='https://www.javascript.com/'
                >
                    <SiJavascript className='content_icon javascript_icon' />
                </ContentItem>
                <ContentItem
                    experience='2 months'
                    title='Blender'
                    url='https://www.blender.org/'
                >
                    <SiBlender className='content_icon blender_icon' />
                </ContentItem>
                <ContentItem
                    experience='20 months'
                    title='HTML'
                    url='https://html.com/'
                >
                    <SiHtml5 className='content_icon html_icon' />
                </ContentItem>
                <ContentItem
                    experience='1 month'
                    title='Discord'
                    url='https://discord.com/'
                >
                    <SiDiscord className='content_icon discord_icon' />
                </ContentItem>
                <ContentItem
                    experience='20 months'
                    title='CSS'
                    url='https://de.wikipedia.org/wiki/Cascading_Style_Sheets'
                >
                    <SiCss3 className='content_icon css_icon' />
                </ContentItem>
                <ContentItem
                    experience='12 months'
                    title='React'
                    url='https://reactjs.org/'
                >
                    <SiReact className='content_icon react_icon' />
                </ContentItem>
                <ContentItem
                    experience='6 months'
                    title='Jest'
                    url='https://jestjs.io/'
                >
                    <SiJest className='content_icon jest_icon' />
                </ContentItem>
                <ContentItem
                    experience='6 months'
                    title='Testing Library'
                    url='https://testing-library.com'
                >
                    <SiTestinglibrary className='content_icon tlr_icon' />
                </ContentItem>
                <ContentItem
                    experience='18 months'
                    title='Git'
                    url='https://git-scm.com/'
                >
                    <SiGit className='content_icon git_icon' />
                </ContentItem>
                <ContentItem
                    experience='3 months'
                    title='Three.js'
                    url='https://threejs.org/'
                >
                    <SiThreedotjs className='content_icon threedotjs_icon' />
                </ContentItem>
                <ContentItem
                    experience='12 months'
                    title='Sass'
                    url='https://sass-lang.com/'
                >
                    <SiSass className='content_icon sass_icon' />
                </ContentItem>
                <ContentItem
                    experience='3 months'
                    title='MongoDB'
                    url='https://www.mongodb.com/' >
                    <SiMongodb className='content_icon mongodb_icon' />
                </ContentItem>
                <ContentItem
                    experience='6 months'
                    title='Jira'
                    url='https://www.atlassian.com/software/jira'
                >
                    <SiJira className='content_icon jira_icon' />
                </ContentItem>
                <ContentItem
                    experience='3 months'
                    title='Python'
                    url='https://www.python.org/'
                >
                    <SiPython className='content_icon python_icon' />
                </ContentItem>
                <ContentItem
                    experience='12 months'
                    title='NPM'
                    url='https://www.npmjs.com/'
                >
                    <SiNpm className='content_icon npm_icon' />
                </ContentItem>
                <ContentItem
                    experience='6 months'
                    title='Node.js'
                    url='https://nodejs.org/en/'
                >
                    <SiNodedotjs className='content_icon nodedotjs_icon' />
                </ContentItem>
            </ContentContext.Provider>
        </div>
    )
}

export default Content