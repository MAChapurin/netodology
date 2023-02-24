export function Card({ img, title, text, link }) {
  return (
    <div className="card" style={{ width: "18rem"}}>
     {img &&  <img src={img} className="card-img-top" alt={title || 'photo'} />}
      <div className="card-body">
        {title && <h5 className="card-title">{title}</h5>}
        {text && <p className="card-text">{text}</p>}
        <a href="#" className="btn btn-primary">
          {link || 'Go somewhere'}
        </a>
      </div>
    </div>
  );
}
