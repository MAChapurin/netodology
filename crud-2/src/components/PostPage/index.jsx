import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ContextData } from "../../context";

export function PostPage({ posts }) {
  const [post, setPost] = useState({});
  const { URL, getPosts } = useContext(ContextData);
  const { pId } = useParams();
  const navigate_2 = useNavigate();
  const targetPost = posts.find((post) => post.id === Number(pId));
  const { content, created } = targetPost;
  const timeCreated = ` ${new Date(created).getMinutes()} minutes ago `;
  const deletePost = (id) => {
    fetch(`http://localhost:7777/posts/${id}`, {
      method: "DELETE",
    }).finally(()=> {
        console.log('deleted')
        getPosts()
        navigate_2('/');
    })
  };
  useEffect(() => {
    console.log(targetPost);
  }, []);
  return (
    <div className="post">
      <div className="post__wrap">
        <img
          className="post__img"
          src="https://i.pravatar.cc/40"
          alt="avatar"
        />
        <div className="post__wrap-span">
          <span>Name Surname</span>
          <span>{timeCreated}</span>
        </div>
      </div>
      <p className="post__content">{content}</p>
      <div className="post__btn-wrap">
        <Link to={`/posts/modify/${pId}`} className="post__btn blue">Изменить</Link>
        <button
          className="post__btn red"
          onClick={() => {
            deletePost(pId);
          }}
        >
          Удалить
        </button>
      </div>
    </div>
  );
}
