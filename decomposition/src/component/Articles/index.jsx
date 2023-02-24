/**
 *
 * @returns список ссылок на различные популярные статьи
 */

export function Articles({ articles }) {
  return (
    <div>
      <ul className="ul">
        {articles.map((article) => {
          return (
            <li key={article}>
              <a href="#!">{article}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
