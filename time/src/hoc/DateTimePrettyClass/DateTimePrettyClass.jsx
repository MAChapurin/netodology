import React from "react";


export function DateTimePrettyClass(Component) {
  return class extends React.Component {
    year = 31536000000;
    day = 86400000;
    hour = 3600000;
    now = new Date();
    targetDate = new Date(this.props.date);
    newProps = { ...this.props };
    componentDidMount() {
      console.log("Текущие пропсы: ", this.props);
    }
    render() {
      if (this.now.getTime() - this.targetDate.getTime() <= this.hour) {
        const minutesProps = {
          date: `${Math.floor(
            new Date(this.now.getTime() - this.targetDate.getTime()) /
              (this.hour / 60)
          )} минут назад`,
        };
        return <Component {...minutesProps} />;
      } else if (this.now.getTime() - this.targetDate.getTime() <= this.day) {
        const hourProps = {
          date: `${Math.floor(
            new Date(this.now.getTime() - this.targetDate.getTime()) / this.hour
          )} час назад`,
        };
        return <Component {...hourProps} />;
      } else if (this.now.getTime() - this.targetDate.getTime() > this.year) {
        return <Component {...this.props} />;
      } else if (this.now.getTime() - this.targetDate.getTime() > this.day) {
        const dayProps = {
          date: `${Math.floor(
            new Date(this.now.getTime() - this.targetDate.getTime()) / this.day
          )} день назад`,
        };
        return <Component {...dayProps} />;
      } else return <Component {...this.props} />;
    }
  };
}
