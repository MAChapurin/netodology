import { Link } from "react-router-dom";

export function Header() {
  return (
    <div className="header">
      <Link className="header__link" to="/posts/new">
        Добавить пост
      </Link>
    </div>
  );
}
