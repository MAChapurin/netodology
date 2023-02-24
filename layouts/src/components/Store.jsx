import { useState } from "react";
import "../App.css";
import CardView from "./CardView";
import IconSwitch from "./IconSwitch"


export default function Store(props) {
  const [view, setView] = useState("view_list");
  const onSwitch = () => {
    if (view === "view_list") {
        setView("view_module")
    } else {
        setView("view_list")
    }
  }
  return (
    <>
      <div style={{display: 'flex', flexDirection: 'row-reverse'}}>
      <IconSwitch icon = {view} onSwitch={onSwitch}/>
      </div>
      <CardView products={props.products} view={view}/>
    </>
  );
}
