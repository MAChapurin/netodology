/**
 * Компонент отрисовывает ссылку
 * по разному в зависимости активная она
 * на данный момент или нет
 */

export function TitleLink({ title, isActive }) {
  const styles = {
    marginRight: "10px",
    textDecoration: "none",
  };

  const addStyles = isActive
    ? { color: "blue" }
    : { color: "blue", opacity: 0.5 };

  return (
    <a href="#!" style={{ ...styles, ...addStyles }}>
      {title}
    </a>
  );
}
