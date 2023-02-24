import '../../App.css';
/**
 * 
 * @returns Здесь то ради чего некоторые из нас приходят на этот сайт
 * инпут для ввода данныъ, кнопка отправки и спан с примером ввода
 */

export function Search() {
    return (
        <>
        <div className='search-wrap'>
        <a href="#!">
            <img src='https://avatars.mds.yandex.net/i?id=42641d08966cb2a054cfe4783c36502aec669e25-7564382-images-thumbs&n=13' alt="yandex" />
        </a>
        <form className='form'>
            <input type="text" className="yandex-search"/>
            <button >Найти </button>
        </form>
        </div>
        <div>Найдется все. Например, <span style={{color: 'gray'}}>Фазы луны</span></div>
        </>
    ) 
}