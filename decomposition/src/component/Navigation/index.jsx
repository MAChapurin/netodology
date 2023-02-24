/**
 * 
 * @returns компонент с меню навигации по сайту
 */

import '../../App.css';

export function Navigation() {
    return (
        <nav className='nav-main'>
            <a href="#!">Видео</a>
            <a href="#!">Картинки</a>
            <a href="#!">Новости</a>
            <a href="#!">Карты</a>
            <a href="#!">Маркет</a>
            <a href="#!">Переводчик</a>
            <a href="#!">Эфир</a>
            <a href="#!">еще</a>
        </nav>
    )
}