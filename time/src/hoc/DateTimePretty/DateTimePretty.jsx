// import { DateTime } from "../../components/DateTime/DateTime";

// export function DateTimePretty(props) {
//   const year = 31536000000;
//   const day = 86400000;
//   const hour = 3600000;
//   const now = new Date();
//   const { date } = props;
//   const targetDate = new Date(date);
//   const newProps = { date: date };

//   if (now.getTime() - targetDate.getTime() <= hour) {
//     const minutesProps = {
//       date: `${Math.floor(
//         new Date(now.getTime() - targetDate.getTime()) / (hour / 60)
//       )} минут назад`,
//     };
//     return DateTime(minutesProps);
//   } else if (now.getTime() - targetDate.getTime() <= day) {
//     const hourProps = {
//       date: `${Math.floor(
//         new Date(now.getTime() - targetDate.getTime()) / hour
//       )} час назад`,
//     };
//     return DateTime(hourProps);
//   } else if (now.getTime() - targetDate.getTime() > year) {
//     return DateTime(newProps);
//   } else if (now.getTime() - targetDate.getTime() > day) {
//     const dayProps = {
//       date: `${Math.floor(
//         new Date(now.getTime() - targetDate.getTime()) / day
//       )} день назад`,
//     };
//     return DateTime(dayProps);
//   } else return DateTime(newProps);
// }
