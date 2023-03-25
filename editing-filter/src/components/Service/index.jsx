import { useSelector, useDispatch } from "react-redux";
import { editService, removeService, changeName, changePrice, changeId, searchService } from "../../store";

export function Service({ id, name, price }) {
  const dispatch = useDispatch();
  return (
    <li>
      {name} {price}{" "}
      <button
        onClick={() => {
            // console.log(editService({id, name, price}))
        //   dispatch(editService({id, name, price}));
        dispatch({type: 'EDIT_MODE'})
          dispatch(changeName(name));
          dispatch(changePrice(price));
          dispatch(changeId(id));
          dispatch(searchService(''));
        }}
      >
        &#9998;
      </button>
      <button
        onClick={() => {
          dispatch(removeService(id));
        }}
      >
        X
      </button>
    </li>
  );
}
