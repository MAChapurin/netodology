import React, { useEffect, useState, useRef, useContext } from "react";
import { Form } from "../Form";
import { HeaderContent } from "../HeaderContent";
import { ContextData } from "../ContextData/ContextData";


export function Header() {
const { auth } = useContext(ContextData);
useEffect(()=> {
    console.log('Header:' , auth)
},[])
  return (
    <div className="header">
      <span className="header__logo">Neto Social</span>
      {auth === true ? <HeaderContent/> : <Form /> }
      
    </div>
  );
}
