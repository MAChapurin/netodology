import { News } from "../News";
import logo from "../../logo.svg";

/**
 * Блок новостей, рисует текст ссылок новостей, 
 * в зависимости от выбранного блока
 */

export function NewsList({ activeLink }) {
  const news = [
    'Ученые сделали новое открытие',
    "В городах России прошло празднование дня ВМФ",
    'Инопланетяне могут начать вторжение уже завтра',
    "Объявлено строительство новой столицы",
    'РЖД презентовало новый тип подвижного состава'
  ];

  return (
    <ul style={{listStyleType: 'none'}}>
        {news.map(el => <News key={el} icon={logo} text={el}/>)}
    </ul>
  );
}
