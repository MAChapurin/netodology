export function ChatKeyBoard({ inputRef, sendMessages, userId }) {
  return (
    <form className="chat__form">
      <input type="text" className="chat__input" ref={inputRef}/>
      <button
        className="chat__button"
        onClick={(e) => {
            e.preventDefault();
          sendMessages(userId);
        }}
      >
        <img
          className="chat__img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpPC52im18gjqdsvY4jZqvUw17jMAfsGedKSrPBoroqP7saOoW0haxC_s_I2M3dqqnJk8&usqp=CAU"
          alt=""
        />
      </button>
    </form>
  );
}
