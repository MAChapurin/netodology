import './Note.css'

export function Note({id, content, deleteContent}) {
    return (
        <li className="card">
            <button className="card__btn" onClick={()=> {
                deleteContent(id)
            }}>
                X
            </button>
            <p className='card__p'>
            {content}
            </p>
        </li>
    )
}