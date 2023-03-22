import { Link, useNavigate, useParams } from "react-router-dom";

export function Page404() {
    return (
        <div>
            Страница не найдена
        <Link to="/">На главню</Link>
        </div>
    )
}