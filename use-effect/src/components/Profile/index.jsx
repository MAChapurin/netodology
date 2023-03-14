import React, { useContext } from "react";
import { Context } from "../Context";

export function Profile() {
  const { avatar, name, city, company, position } = useContext(Context);

  return (
    <div className="profile">
      <img src={avatar} alt={name} />
      <h2>{name}</h2>
      <p>City: {city}</p>
      <p>Company: {company}</p>
      <p>Position: {position}</p>
    </div>
  );
}

