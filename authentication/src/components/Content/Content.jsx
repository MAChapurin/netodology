import React, {useContext} from "react";
import { ContextData } from "../ContextData/ContextData";
import { GuestContent } from "../GuestContent";
import { News } from "../News";


export function Content() {
    const { auth } = useContext(ContextData);
    return (
        <div className="content">
             
             {auth === true ? <News/> : <GuestContent/> }
        </div>
    )
}