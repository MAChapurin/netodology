import { Note } from "../Note/Note";
import "./Notes.css";

export function Notes({ notes, deleteContent }) {
  return (
    <ul className="Notes__ul">
      {notes.map((el) => {
        return (
          <Note
            key={el.id}
            id={el.id}
            content={el.content}
            deleteContent={deleteContent}
          />
        );
      })}
    </ul>
  );
}
