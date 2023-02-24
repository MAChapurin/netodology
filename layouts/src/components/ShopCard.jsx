import "../App.css";

export default function ShopCard(props) {
  const { name, price, color, img } = props.product;
  const view = props.view;

  return (
    <li
      className={view === "view_list" ? "product_li" : "product_li_module"}
      style={
        view === "view_list"
          ? { backgroundImage: `url(${img})` }
          : { backgroundColor: "#F6F6F6" }
      }
    >
      {view === "view_list" ? null : (
        <img className="product_img" src={img} alt={name} />
      )}
      <h2
        className={
          view === "view_list" ? "product_name" : "product_name_module"
        }
      >
        {name}
      </h2>
      <p
        className={
          view === "view_list" ? "product_color" : "product_color_module"
        }
      >
        {color}
      </p>

      {view === "view_list" ? (
        <div className="wrap">
          <div>${price}</div>
          <button className="btn-add">ADD TO CART</button>
        </div>
      ) : (
        <>
          <div style={{color: "red"}}>${price}</div>
          <button className="btn-add btn-add_module">ADD TO CART</button>
        </>
      )}
    </li>
  );
}

// {
//     name: "Nike Metcon 3",
//     price: "150",
//     color: "green",
//     img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
//   }
