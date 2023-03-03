import React, { useState, useEffect } from "react";
import "./Watch.css";

export function Watch({ deleteHandler, title, zone = 0 }) {
  const [seconds, setSeconds] = useState();
  const [minutes, setMinutes] = useState();
  const [hours, setHours] = useState();
  const deg = 6;

  useEffect(() => {
    const time = setInterval(() => {
      const date = new Date();
      setSeconds(date.getSeconds() * deg);
      setMinutes(date.getMinutes() * deg);
      setHours((date.getHours() + Number(zone)) * 30);
      console.log(title, time); //для удобства проверки
    });
    return () => {
      clearInterval(time);
    };
  }, [seconds, minutes, hours]);

  return (
    <div className="clock">
      <button
        className="delete"
        onClick={() => {
          deleteHandler(title);
        }}
      >
        X
      </button>
      <h2 className="h2">{title}</h2>
      <div className="hour">
        <div
          className="hours"
          style={{ transform: `rotateZ(${hours + minutes / 12}deg)` }}
        ></div>
      </div>
      <div className="minute">
        <div
          className="minutes"
          style={{ transform: `rotateZ(${minutes}deg)` }}
        ></div>
      </div>
      <div className="second">
        <div
          className="seconds"
          style={{ transform: `rotateZ(${seconds}deg)` }}
        ></div>
      </div>
    </div>
  );
}
