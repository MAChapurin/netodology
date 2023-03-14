import React, { useEffect, useState, useRef, useContext } from "react";
import { ContextData } from "../ContextData/ContextData";

export function Form() {
  const [password, setPassword] = useState("");
  const [typeInput, setTypeInput] = useState("password");
  const [colorName, setColorName] = useState("#333");
  const [colorPassword, setColorPassword] = useState("#333");
  const inputName = useRef();
  const inputPassword = useRef();
  const {token, setToken, name, setName, setAuth } = useContext(ContextData);
  return (
    <form className="form">
      <input
        style={{ color: colorName }}
        type="text"
        className="form__input"
        placeholder="Username"
        value={name}
        ref={inputName}
        onChange={(e) => {
          setColorName("#333");
          setName(e.target.value);
        }}
      />
      <input
        style={{ color: colorPassword }}
        type={typeInput}
        className="form__input"
        placeholder="Password"
        value={password}
        ref={inputPassword}
        onChange={(e) => {
          setTypeInput("password");
          setColorPassword("#333");
          setPassword(e.target.value);
        }}
      />
      <button
        className="form__button"
        onClick={(e) => {
          e.preventDefault();
          fetch("http://localhost:7070/auth", {
            method: "POST",
            headers: {
              "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify({ login: name, password: password }),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.token) {
                setToken(data);
                setAuth(true);
                localStorage.setItem('key', true);
              } else if (data.message === "user not found") {
                setColorName("red");
                setName(data.message);
                inputName.current.focus();
              } else if (data.message === "invalid password") {
                setTypeInput("text");
                setColorPassword("red");
                setPassword(data.message);
                inputPassword.current.focus();
              }
            });
        }}
      >
        Login
      </button>
    </form>
  );
}
