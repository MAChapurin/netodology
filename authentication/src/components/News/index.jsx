import React, { useEffect, useContext, useState } from "react";
import { ContextData } from "../ContextData/ContextData";

export function News() {
  const { token, auth } = useContext(ContextData);
  const [listNews, setListNews] = useState([]);
  useEffect(() => {
      console.log("News:", token, auth);
      fetch("http://localhost:7070/private/news", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setListNews(data);
        });
  }, [token]);
  return (
    <div className="news__wrap">
      {listNews.length > 0
        ? listNews.map((news) => {
            return (
              <div className="news" key={news.id}>
                <img src={news.image} alt={news.title} />
                <div className="news__inside-wrap">
                  <h2 className="news__h2">{news.title}</h2>
                  <p className="news__p">{news.content}</p>
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
}
