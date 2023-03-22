import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ContextData } from "../../context";

export function PostPage() {
  const { pId } = useParams();
  const navigate_2 = useNavigate();
  const getPostById = (id) => {
    fetch(`http://localhost:7070/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("postId: ", data.post);
        if (data.post) {
          setPost(data.post);
        } else {
          navigate_2("/page404");
        }
      });
  };
  const { URL, getPosts } = useContext(ContextData);
  const [post, setPost] = useState(null);

  // const targetPost = posts.find((post) => post.id === Number(pId));
  // const { content, created } = targetPost;

  const timeCreated = (date) => {
    const now = new Date();
    const createdDate = new Date(date);
    const difference = new Date(
      now.getTime() - createdDate.getTime()
    ).getMinutes();
    return `${difference} minutes ago`;
  };

  const deletePost = (id) => {
    fetch(`http://localhost:7070/posts/${id}`, {
      method: "DELETE",
    }).finally(() => {
      console.log("deleted");
      getPosts();
      navigate_2("/");
    });
  };
  useEffect(() => {
    getPostById(pId);
  }, []);
  return (
    <>
    <Link style={{width: "15%"}} className="post__btn blue" to='/posts/'>На главную</Link>
      <div className="post">
        <div className="post__wrap">
          <img
            className="post__img"
            src="https://i.pravatar.cc/40"
            alt="avatar"
          />
          <div className="post__wrap-span">
            <span>Name Surname</span>
            <span>{post ? timeCreated(post.created) : "...loading"}</span>
          </div>
        </div>
        <p className="post__content">{post ? post.content : "...loading"}</p>
        <div className="post__btn-wrap">
          <Link to={`/posts/modify/${pId}`} className="post__btn blue">
            Изменить
          </Link>
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
    </>
  );
}
