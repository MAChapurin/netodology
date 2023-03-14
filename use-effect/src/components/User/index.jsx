import React, {useContext} from "react";
import { Context } from "../Context";

export function User(props) {
    const {currentUserId, setCurrentUserId} = useContext(Context)
    const {name, id} = props;
    return (
        <div className={`user__name ${currentUserId === id && 'active'}`} onClick={()=> {
            console.log(name, id)
            setCurrentUserId(id)
            console.log('from user',currentUserId)
        }}>
            {name}
        </div>
    )
}