import {
    AirDropContent,
    Programme,
    Downloads,
    Schreibtisch
} from './content/index'

const renderSwitch = (content) => {
    switch (content) {
        case "AirDrop":
            return (
                <AirDropContent />
            )
        case "Programme":
            return (
                <Programme />
            )
        case "Schreibtisch":
            return <Schreibtisch />
        // case "Dokumente":
        //     return
        case "Downloads":
            return (
                <Downloads />
            )
        default:
            return <p className='content_default_text'>Dieser Ordner ist leer.</p>
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