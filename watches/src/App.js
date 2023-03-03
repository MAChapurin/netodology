import React, { createRef, useState } from "react";
import "./App.css";
import { Form } from "./components/Form";
import { WatchContainer } from "./components/WatchContainer";

function App() {
  const [watchStore, setWatchStore] = useState([]);
  const refWatchesTitle = createRef();
  const refTimeZone = createRef();
  const onClickHandler = () => {
    setWatchStore([
      ...watchStore,
      {
        title: refWatchesTitle.current.value,
        zone: refTimeZone.current.value,
      },
    ]);
    refWatchesTitle.current.focus();
    refWatchesTitle.current.value = "";
    refTimeZone.current.value = "";
  };

  const deleteHandler = (title) => {
    setWatchStore([...watchStore.filter((watch => watch.title !== title))])
  }
  console.log('watchStore: ', watchStore)
  return (
    <div className="App">
      <Form
        refWatchesTitle={refWatchesTitle}
        refTimeZone={refTimeZone}
        onClickHandler={onClickHandler}
        watchStore={watchStore}
      />
      <WatchContainer watchStore={watchStore} deleteHandler={deleteHandler}/>
    </div>
  );
}

export default App;
