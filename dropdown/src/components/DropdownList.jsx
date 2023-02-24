export default function DropdownList(props) {
//   console.log(props);
//   console.log('droplist: ' ,props.refCurrentLink.current)
  return (
    <ul data-id="dropdown" className="dropdown">
      {props.linkList.map((elem) => {
        return (
          <li
            className={props.refCurrentLink.current === elem ? "active" : null}
            key={elem}
            onClick={()=> {
                props.handlerClick(elem);
            }}
          >
            <a href="#">{elem}</a>
          </li>
        );
      })}
      {/* <li className="active"><a href="#">Profile Information</a></li>
            <li><a href="#">Change Password</a></li>
            <li><a href="#">Become PRO</a></li>
            <li><a href="#">Help</a></li>
            <li><a href="#">Log Out</a></li> */}
    </ul>
  );
}
