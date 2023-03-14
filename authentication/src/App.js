import React, { useState, useEffect, useContext } from "react";

import { Content } from "./components/Content/Content";
import { Header } from "./components/Header";
import { ContextData } from "./components/ContextData/ContextData";

function App() {
  const [token, setToken] = useState(null);
  const [auth, setAuth] = useState(Boolean(authStatus()));
  const [name, setName] = useState("");
  const [nickName, setNickname] = useState();
  const [avatar, setAvatar] = useState();
  function authStatus() {
    if (localStorage.getItem("key") === null) {
      localStorage.setItem("key", false);
    }
    return localStorage.getItem("key");
  }
  useEffect(()=> {
    console.log('App:', authStatus())
    if (Boolean(authStatus())) {
      console.log(Boolean(authStatus()))
      fetch("http://localhost:7070/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ login: "vasya", password: "password" }),
    })
      .then((res) => res.json())
      .then((data) => {
        setToken(data.token);
        setAuth(true);
      })
    } else {
      setAuth(false);
    } 
  },[])

  // useEffect(() => {
  //   fetch("http://localhost:7070/auth", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json;charset=utf-8",
  //     },
  //     body: JSON.stringify({ login: "vasya", password: "password" }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setToken(data.token);
  //     });
  // }, []);

  useEffect(() => {
    localStorage.setItem("key", auth);
  }, [auth]);

  useEffect(() => {
    if (!token) return;
    fetch("http://localhost:7070/private/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setNickname(data.name);
        setAvatar(data.avatar);
      });
  }, [token]);

  return (
    <div className="App">
      <ContextData.Provider
        value={{
          token,
          setToken,
          auth,
          setAuth,
          name,
          setName,
          nickName,
          setNickname,
          avatar,
          setAvatar,
        }}
      >
        <Header />
        <Content />
      </ContextData.Provider>
    </div>
  );
}

export default App;
