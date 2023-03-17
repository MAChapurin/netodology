import { useContext, useState, useEffect, useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ContextData } from "../../context";

export function PostModify({ posts }) {
    const { pId } = useParams();
  const modifiedPost = posts.find((post) => post.id === Number(pId));
  const modifiedContent = modifiedPost.content
  const [inputValueModify, setInputValueModify] = useState(modifiedContent);
  const { URL, getPosts } = useContext(ContextData);
  
  const navigate_3 = useNavigate();

  const modifyPost = () => {
    // if (!textArea.current.value) return;

    let newPost = {
      id: 0,
      content: inputValueModify,
    };

    fetch("http://localhost:7777/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(newPost),
    }).finally(() => {
      getPosts();
      console.log(newPost);
      setInputValueModify("");
      fetch(`http://localhost:7777/posts/${pId}`, {
        method: "DELETE",
      }).finally(()=>{
        getPosts()
        navigate_3("/");
      })
    });
  };

  useEffect(() => {
    console.log("modify: ", pId, modifiedPost);
  }, []);
  return (
    <div className="create">
      <form
        className="create__wrap"
        onSubmit={(e) => {
          e.preventDefault();
          modifyPost();
        }}
      >
        <Link to="/" className="create__close">
          X
        </Link>
        <input
          className="create__input"
          onChange={(e) => setInputValueModify(e.target.value)}
          type="text"
          placeholder="your post"
          value={inputValueModify}
        />
        <button className="create__send">Сохранить</button>
      </form>
    </div>
  );
}
