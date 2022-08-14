import React, { useContext } from 'react'
import Programm from '../components/content/helper/ProgrammeItem'
import FinderButton from './FinderButton'
import { LoginContext } from '../App'
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
    const { open, setOpen } = useContext(LoginContext)

    return (
        <div
            className="dock_container"
        >
            <div className="dock_programme">
                <Programm
                    dragItem={false}
                    title='TypeScript'
                    url='https://www.typescriptlang.org/'
                >
                    <SiTypescript className='content_icon typescript_icon' />
                </Programm>
                <Programm
                    dragItem={false}
                    title='JavaScript'
                    url='https://www.javascript.com/'
                >
                    <SiJavascript className='content_icon javascript_icon' />
                </Programm>
                <Programm
                    dragItem={false}
                    title='Blender'
                    url='https://www.blender.org/'
                >
                    <SiBlender className='content_icon blender_icon' />
                </Programm>
                <Programm
                    dragItem={false}
                    title='CSS'
                    url='https://de.wikipedia.org/wiki/Cascading_Style_Sheets'
                >
                    <SiCss3 className='content_icon css_icon' />
                </Programm>
                <Programm
                    dragItem={false}
                    title='HTML'
                    url='https://html.com/'
                >
                    <SiHtml5 className='content_icon html_icon' />
                </Programm>
                <Programm
                    dragItem={false}
                    title='React'
                    url='https://reactjs.org/'
                >
                    <SiReact className='content_icon react_icon' />
                </Programm>
                <Programm
                    dragItem={false}
                    title='Sass'
                    url='https://sass-lang.com/'
                >
                    <SiSass className='content_icon sass_icon' />
                </Programm>
                <Programm
                    dragItem={false}
                    title='Jira'
                    url='https://www.atlassian.com/software/jira'
                >
                    <SiJira className='content_icon jira_icon' />
                </Programm>
                <Programm
                    dragItem={false}
                    title='Testing Library'
                    url='https://testing-library.com'
                >
                    <SiTestinglibrary className='content_icon tlr_icon' />
                </Programm>
                <Programm
                    dragItem={false}
                    title='Git'
                    url='https://git-scm.com/'
                >
                    <SiGit className='content_icon git_icon' />
                </Programm>
                <Programm
                    dragItem={false}
                    title='Three.js'
                    url='https://threejs.org/'
                >
                    <SiThreedotjs className='content_icon threedotjs_icon' />
                </Programm>
                <Programm
                    dragItem={false}
                    title='MongoDB'
                    url='https://www.mongodb.com/' >
                    <SiMongodb className='content_icon mongodb_icon' />
                </Programm>
                <Programm
                    dragItem={false}
                    title='Discord'
                    url='https://discord.com/'
                >
                    <SiDiscord className='content_icon discord_icon' />
                </Programm>
                <Programm
                    dragItem={false}
                    title='Python'
                    url='https://www.python.org/'
                >
                    <SiPython className='content_icon python_icon' />
                </Programm>
                <Programm
                    dragItem={false}
                    title='Jest'
                    url='https://jestjs.io/'
                >
                    <SiJest className='content_icon jest_icon' />
                </Programm>
                <Programm
                    dragItem={false}
                    title='NPM'
                    url='https://www.npmjs.com/'
                >
                    <SiNpm className='content_icon npm_icon' />
                </Programm>
                <Programm
                    dragItem={false}
                    title='Node.js'
                    url='https://nodejs.org/en/'
                >
                    <SiNodedotjs className='content_icon nodedotjs_icon' />
                </Programm>
                <FinderButton showText={false} setOpen={setOpen} open={open} />
                <span className={`finder_button_dot ${open ? 'opened' : null}`}></span>
            </div>
        </div>
    )
}

export default Dock