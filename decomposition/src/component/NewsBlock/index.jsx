import { GetCurse } from "../GetCurse";
import { NewsList } from "../NewList";
import { TitleLinks } from "../TitleLinks";

export function NewsBlock() {
  return (
    <div>
      <TitleLinks />
      <NewsList activeLink="Cейчас в СМИ" />
      <div className="curse-wrap">
        <GetCurse obj='USD' market='MOEX'/>
        <GetCurse obj='EUR' market='MOEX'/>
        <GetCurse obj='НЕФТЬ'/>
      </div>
    </div>
  );
}
