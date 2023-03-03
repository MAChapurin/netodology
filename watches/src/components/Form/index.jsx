import './Form.css';

export function Form({refWatchesTitle, refTimeZone, onClickHandler}) {
    return (
        <form className="form">
            <label htmlFor="watches_title">Название
            <input type="text" name="watches_title" ref={refWatchesTitle}/>
            </label>
            <label htmlFor="timezone">Временная зона
            <input type="number" name="time_zone" ref={refTimeZone}/>
            </label>
            <button type="submit" onClick={(e)=> {
                e.preventDefault();
                onClickHandler()
            }}>Добавить</button>
        </form>
    )
}