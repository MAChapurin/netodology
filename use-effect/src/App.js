import React, { useState, useEffect } from "react";
import { List } from "./components/List";
import { Profile } from "./components/Profile";
import { Context } from "./components/Context";
const URL =
  "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/";
function App() {
  const [userList, setUserList] = useState([]);
  const [currentUserId, setCurrentUserId] = useState(null);
  const [avatar, setAvatar] = useState();
  const [name, setName] = useState();
  const [city, setCity] = useState();
  const [company, setCompany] = useState();
  const [position, setPosition] = useState();

  useEffect(() => {
    fetch(`${URL}users.json`)
      .then((res) => res.json())
      .then((data) => setUserList(data));
  }, []);

  useEffect(() => {
    if (!currentUserId) {
      return
    } 
    fetch(`${URL}${currentUserId}.json`)
      .then((res) => res.json())
      .then((data) => {
        const { name, avatar, details } = data;
        const { city, company, position } = details;
        setAvatar(avatar);
        setName(name);
        setCity(city);
        setCompany(company);
        setPosition(position);
      });
  }, [currentUserId]);

  return (
    <div className="App">
      <Context.Provider
        value={{
          currentUserId,
          setCurrentUserId,
          avatar,
          name,
          city,
          company,
          position,
        }}
      >
        <List list={userList} />
        {currentUserId && <Profile />}
      </Context.Provider>
    </div>
  );
}

export default App;
