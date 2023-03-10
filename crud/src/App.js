import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import { Notes } from "./components/Notes";
import { Form } from "./components/Form";

function App() {
  const textArea = useRef();

  const [notes, setNotes] = useState([]);

  const resetContent = () => {
    fetch("http://localhost:7777/notes")
      .then((res) => res.json())
      .then((data) => setNotes([...data]));
  };

  const addContent = () => {
    if (!textArea.current.value) return;

    let newContent = {
      id: Math.random(),
      content: textArea.current.value,
    };

    fetch("http://localhost:7777/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(newContent),
    }).finally(() => {
      textArea.current.value = "";
      resetContent();
    });
  };

  const deleteContent = (id) => {
    fetch("http://localhost:7777/notes/" + `${id}`, {
      method: "DELETE",
    }).finally(() => {
      resetContent();
    });
  };

  useEffect(() => {
    resetContent();
  }, []);

  useEffect(() => {
    console.log(notes);
  }, [notes]);

  return (
    <div className="App">
      <h1 className="h1">Notes</h1>
      <button className="notes-reset-btn" onClick={resetContent}>
        <img
          src="https://pngicon.ru/file/uploads/1_2841.png"
          alt="обновить"
        ></img>
      </button>
      {notes.length ? (
        <Notes notes={notes} deleteContent={deleteContent} />
      ) : (
        <h2>Server do not has any data, please add it by form in down</h2>
      )}

      <Form textArea={textArea} addContent={addContent} />
    </div>
  );
}

export default App;
