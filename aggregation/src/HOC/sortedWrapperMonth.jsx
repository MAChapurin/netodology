import React from "react";



export function sortedWrapperMonth(Component) {
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
  return class extends React.Component {
    // currentYear = [...this.props].filter(item => new Date(item.date) === 2018)
    render() {
      console.log("sortedMonth: ", this.props);
      const currentYear = [...this.props.list].filter(
        (item) => new Date(item.date).getFullYear() === 2018
      ).sort((a, b) => {
        if (new Date(a.date).getTime() < new Date(b.date).getTime()) {
          return 1;
        }
        if (new Date(a.date).getTime() > new Date(b.date).getTime()) {
          return -1;
        }
        return 0;
      })
       const dataMonth = currentYear.map(el => {
        const newObj = {};
        newObj.month = months[new Date(el.date).getMonth()];
        newObj.amount = el.amount;
        return newObj;
       } )
      console.log("sortedMonthTest: ", currentYear);
      console.log("sortedMonthTest: ", dataMonth);
      return <Component list={dataMonth} />;
    }
  };
} 


