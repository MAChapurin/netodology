import { Link } from "react-router-dom";

export function Page404() {
    return (
        <div className="article">
        <h2 className="article__title">Ошибка!</h2>
        <p className="article__paragraph">
            Страница не найдена по указанному адресу
        </p>
        <Link className="menu__item" to="/">
          На главную
        </Link>
        </div>
    )
}