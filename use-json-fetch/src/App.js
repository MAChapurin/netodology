import React, {useEffect} from "react";
import { UseJsonFetch} from "./hooks/UseJsonFetch";
import { useJsonFetch_2 } from "./hooks/useJsonFetch_2"; 


const TestComponent = ({url, title = 'компонент'}) => {
  const {data, loading, error} = useJsonFetch_2(url);
  useEffect(()=> {
    console.log(data, loading, error)
  },[])
  return (
    <>
    <h2>{title}</h2>
    <div>Статус: {loading ? '...Загрузка данных' : data} {error ? error.message : null}</div>
    </>
  )
}
// {error ? 'Ошибка получения данных' : 'Данные получены'}

function App() {
 
  
  return (
    <div className="App">
      {/* <h2>Вызов  data</h2>
      <UseJsonFetch url={'http://localhost:7070/data'}/>
      <h2>Вызов  error</h2>
      <br/>
      <UseJsonFetch url={'http://localhost:7070/error'}/>
      <h2>Вызов  loading</h2>
      <br/>
      <UseJsonFetch url={'http://localhost:7070/loading'}/> */}
      <TestComponent title='Тестовый компонент data' url={'http://localhost:7070/data'}/>
      <TestComponent title='Тестовый компонент error' url={'http://localhost:7070/error'}/>
      <TestComponent title='Тестовый компонент loading' url={'http://localhost:7070/loading'}/>
    </div>
  );
}

export default App;
