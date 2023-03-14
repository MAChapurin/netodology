import React, { useEffect, useState, useRef, useContext } from "react";
import { ContextData } from "../ContextData/ContextData";

export function HeaderContent() {
    const {nickName,setName, avatar, setAuth} = useContext(ContextData);
    return (
        <div className="header__content">
            <span>Hello, {nickName}</span>
            <img src={avatar} alt={nickName} />
            <button className="logout" onClick={()=> {
                setAuth(false);
                localStorage.setItem('key', false);
                setName('');
            }}>Logout</button>
        </div>
    )
}