import React, { useEffect, useState } from "react";

export function UseJsonFetch({url}) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => {
        if(!res.ok) throw new Error(res.statusText)
       return res.json()
      })
      .catch((e) => {
        // setError(e)
        console.log('error', e.message)
        setData(`Ошибка получения данных: ${e.message}`)
      })
      .then((result) => setData(result))
      .finally(()=> setLoading(false))
  },[]);
  return (
    <div className="display">
        {loading && '...Загрузка данных'}
        {data && 'Данные получены'}
        { null || error}
    </div>
  );
}
