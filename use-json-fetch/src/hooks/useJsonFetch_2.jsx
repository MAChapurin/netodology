import React, { useEffect, useState } from "react";

export function useJsonFetch_2(url) {
    const [data, setData] = useState();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchData = async (url) => {
        setLoading(true)
        try {
            const response = await fetch(url);
            if(!response.ok) {
                throw new Error(response.statusText);
            }
            const result = await response.json();
            setData(result.status);
        } catch(e) {
            setError(e)
            console.log(e)
            setData(`Ошибка получения данных: ${e.message}`)
        } finally {
            setLoading(false)
        }
    }

    useEffect(()=> {
        fetchData(url)
    },[url])

    return {data, loading, error}
}