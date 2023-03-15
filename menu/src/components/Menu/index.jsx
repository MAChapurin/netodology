import { NavLink } from "react-router-dom";

export function Menu() {
    return (
      <nav className="menu">
        <NavLink className="menu__item" to="/">
          ГЛАВНАЯ
        </NavLink>
        <NavLink className="menu__item" to="/drift">
          ДРИФТ-ТАКСИ
        </NavLink>
        <NavLink className="menu__item" to="/timeattack">
          TIME ATTACK
        </NavLink>
        <NavLink className="menu__item" to="/forza">
          FORZA KARTING
        </NavLink>
      </nav>
    );
  }