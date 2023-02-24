export function News({icon, text}) {

    return (
        <li style={{display: 'flex'}}>
            <img src={icon} alt="icon" style={{width: '20px', height: '20px'}}/>
            <a href="#!">{text}</a>
        </li>
    )
}