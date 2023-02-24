import { Articles } from "../Articles";
import { MapBlock } from "../MapBlock";
import { Navigation } from "../Navigation";
import { NewsBlock } from "../NewsBlock";
import { Promotion } from "../Promotion";
import { Search } from "../Search";
import { SimpleBlock } from "../SimpleBlock";
import { Weather } from "../Weather";

/**
 * Это главная страница сайта
 */

export function Main() {
  const articles = [
    "недвижимость - о сталинках",
    "Маркет - люстры и светильники",
    "Авто.ру - привод 4 х 4 до 500000",
  ];
  return (
    <>
      <NewsBlock />
      <Navigation />
      <Search />
      <Promotion />
      <div className="addedPart">
        <SimpleBlock title='Погода' children={<Weather />}/>
        <SimpleBlock title='Посещаемое' children={<Articles articles={articles}/>}/>
        <SimpleBlock title='Телепрограмма'>
          <ul className="ul">
            <li>02:00 ТНТ. BEST </li>
            <li>02:15 Джунгарики </li>
            <li>02:30 Новости </li>
          </ul>
        </SimpleBlock>
        <SimpleBlock title='Карта германии' children={<MapBlock country='Германии'/>}/>
        <SimpleBlock title="Эфир">
        <ul className="ul">
            <li>Управление как искуство </li>
            <li>Ночь. Только пули свистят по степи </li>
            <li>Специально обученный человек рассказывает что-то интересное</li>
          </ul>
        </SimpleBlock>
      </div>
    </>
  );
}
