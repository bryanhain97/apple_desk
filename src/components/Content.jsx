import '../styles/partials/_Content.module.sass'

const renderSwitch = (content) => {
    switch (content) {
        case "AirDrop":
            return (
                <p>airdrop content</p>
            )
        case "Programme":
            return (
                <p>programme content</p>
            )
        case "Schreibtisch":
            return (
                <p>schreibtisch content</p>
            )
        case "Dokumente":
            return (
                <p>dokumente content</p>
            )
        case "Downloads":
            return (
                <p>downloads content</p>
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