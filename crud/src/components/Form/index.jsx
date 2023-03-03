import "./Form.css";

export function Form({ textArea, addContent }) {
  return (
    <form className="form">
      <input
        ref={textArea}
        className="form__input"
        type="text"
        name="input_add"
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          addContent();
        }}
        className="form__btn"
      >
        <img src="https://cdn-icons-png.flaticon.com/512/6492/6492707.png"></img>
      </button>
    </form>
  );
}
