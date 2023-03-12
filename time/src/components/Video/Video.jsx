/* eslint-disable jsx-a11y/iframe-has-title */
import { DateTimePrettyClass } from "../../hoc/DateTimePrettyClass/DateTimePrettyClass";
import { DateTime } from "../DateTime/DateTime";
// import { DateTimePretty } from "../../hoc/DateTimePretty/DateTimePretty";

export function Video(props) {
  const DateTimePretty = DateTimePrettyClass(DateTime)
  return (
    <div className="video">
      <iframe
        src={props.url}
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      ></iframe>
      <DateTimePretty date={props.date}/>
    </div>
  );
}
