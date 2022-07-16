import programmeImage from '../img/programme.png'
import '../styles/partials/_Content.module.sass'

const renderSwitch = (content) => {
    switch (content) {
        case "AirDrop":
            return (
                <p>you suck</p>
            )
        case "Programme":
            return (
                <img className='programme_image' src={programmeImage} alt='programme' />
                // <p>you suck brav</p>
            )
        case "Schreibtisch":
            return (
                <p>you really suck goddamn</p>
            )
        case "Dokumente":
            return (
                <p>you suck toes boi</p>
            )
        case "Downloads":
            return (
                <p>you suck brav</p>
            )
        default:
            return null
    }
}

const Content = ({ currentSelected }) => {
    return (
        <>
            {renderSwitch(currentSelected)}
        </>
    )
}

export default Content