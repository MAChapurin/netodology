import { useContext, useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ContextData } from "../../context";

export function CreatePost() {
  const [inputValue, setInputValue] = useState("");
  const { URL, getPosts } = useContext(ContextData);
  const inputNewPostRef = useRef();
  const navigate = useNavigate();

  const addPost = () => {
    // if (!textArea.current.value) return;

    let newContent = {
      id: 0,
      content: inputValue,
    };

    fetch("http://localhost:7777/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(newContent),
    }).finally(() => {
      getPosts();
      console.log(newContent);
      setInputValue('');
      inputNewPostRef.current.value = '';
      navigate('/');
    });
  };

  useEffect(() => {
    console.log(URL);
  }, []);
  return (
    <div className="create">
      <form className="create__wrap" onSubmit={(e) => {
        e.preventDefault();
          addPost();}}>
        <Link to="/" className="create__close">
          X
        </Link>
        <input
          className="create__input"
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
          placeholder="Набомбите что нибудь!"
          ref={inputNewPostRef}
        />
        <button className="create__send" >
          Опубликовать
        </button>
      </form>
    </div>
  );
}
