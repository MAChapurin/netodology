import React from "react";



export function sortedWrapperDate(Component) {
    function sortedArray(list) {
        return list.sort((a, b) => {
          if (new Date(a.date).getTime() < new Date(b.date).getTime()) {
            return 1;
          }
          if (new Date(a.date).getTime() > new Date(b.date).getTime()) {
            return -1;
          }
          return 0;
        });
      }
  return class extends React.Component {
    sortedList = sortedArray(this.props.list);

    render() {
      console.log("sortedWrapper: ", this.sortedList);
      return <Component {...this.props} />;
    }
  };
}
