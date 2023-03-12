import React from "react";



export function sortedWrapperYear(Component) {

  return class extends React.Component {
    // currentYear = [...this.props].filter(item => new Date(item.date) === 2018)
    render() {
      console.log("sortedYear: ", this.props);
      const sortedYear = [...this.props.list].sort((a, b) => {
        if (new Date(a.date).getTime() < new Date(b.date).getTime()) {
          return 1;
        }
        if (new Date(a.date).getTime() > new Date(b.date).getTime()) {
          return -1;
        }
        return 0;
      })
       const dataYear = sortedYear.map(el => {
        const newObj = {};
        newObj.year = new Date(el.date).getFullYear();
        newObj.amount = el.amount;
        return newObj;
       } )
      console.log("sortedMonthTest: ", sortedYear);
      console.log("sortedMonthTest: ", dataYear);
      return <Component list={dataYear} />;
    }
  };
} 
