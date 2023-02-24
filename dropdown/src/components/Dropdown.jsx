import { useState, useRef, useEffect } from "react";
import "../App.css";
import DropdownList from "./DropdownList";

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const refCurrentLink = useRef("Profile Information");
  

  const linkList = ["Profile Information", "Change Password", "Become PRO", "Help", "Log Out"]

  const handlerClick = (value) => {
    refCurrentLink.current = value;
    console.log('You clicked on', refCurrentLink.current)
    setIsOpen(false);
  }



  return (
    <div className="container">
      <div data-id="wrapper" className="dropdown-wrapper open">
        <button
          data-id="toggle"
          className="btn"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <span>Account Settings</span>
          <i className="material-icons">public</i>
        </button>
        {isOpen && <DropdownList linkList={linkList} refCurrentLink={refCurrentLink} handlerClick={handlerClick}/>}
      </div>
    </div>
  );
}

// onClick={this.toggleOpen}
