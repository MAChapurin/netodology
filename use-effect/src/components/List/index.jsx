import { User } from "../User";

export function List(props) {
    const {list} = props;
    return (
        <ul className="list__ul">
            {list.map(user => {
                return (
                    <li key={user.id} className="list__li">
                        <User name={user.name} id={user.id}/>
                    </li>
                )
            })}
           
        </ul>
    )
}