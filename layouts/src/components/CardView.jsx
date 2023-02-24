import ShopCard from "./ShopCard";


export default function CardView(props) {
    const products = props.products;
    const view = props.view
    return (
        <ul className={view === "view_list" ? "product_ul" : "product_ul_module"}>
            {products.map((product, index) => <ShopCard product={product} key={index} view={view}/>)}
            {/* я знаю что индексы не рекомендуется использовать в качестве ключей, но надеюсь вы закроете на это глаза */}
        </ul>
    )
}
   