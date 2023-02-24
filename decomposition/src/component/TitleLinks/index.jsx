import { DateTime } from "../DateTime";
import { TitleLink } from "../TitleLink";

/**
 * Данный блок получает список ссылок для навигации 
 * по блоку с новостями
 */

export function TitleLinks() {
  const LINKS_PRESS = [
    { title: "Cейчас в СМИ", isActive: true },
    { title: "в Германии", isActive: false },
    { title: "Рекомендуем", isActive: false },
  ];
  return (
    <>
    <nav style={{display: 'inline-block'}}>
      {LINKS_PRESS.map((link) => {
        return <TitleLink key={link.title} {...link} />;
      })} 
    </nav>
    <DateTime/>
    </>
  );
}
