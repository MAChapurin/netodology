import { Link, useNavigate } from "react-router-dom";

export function Post({ content, created, id }) {
  const timeCreatet = ` ${new Date(created).getMinutes()} minutes ago `;
  return (
    <Link to={`/posts/${id}`} className="post" onClick={()=> {
        console.log(id)
    }}>
      <div className="post__wrap">
        <img className="post__img" src="https://i.pravatar.cc/40" alt="avatar" />
        <div className="post__wrap-span">
        <span>Name Surname</span>
        <span>{timeCreatet}</span>
        </div>
        
      </div>

      <p className="post__content">{content}</p>
    </Link>
  );
}
