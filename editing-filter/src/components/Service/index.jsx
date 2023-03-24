export function Service({id, name, price}) {
    return (
        <li>{name} {price} <button onClick={()=> {
            console.log(id)
        }}>fix</button><button>X</button></li>
    )
}