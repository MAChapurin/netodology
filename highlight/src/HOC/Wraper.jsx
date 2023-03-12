import React from "react";

export function Wrapper(Component) {
  function New(props) {
    return (
      <div className="wrap-item wrap-item-new">
        <span className="label">New!</span>
        {props.children}
      </div>
    );
  }

  function Popular(props) {
    return (
      <div className="wrap-item wrap-item-popular">
        <span className="label">Popular!</span>
        {props.children}
      </div>
    );
  }
  return class extends React.Component {
    componentDidMount() {
      console.log(this.props.views);
    }
    render() {
        if (this.props.views <= 100) {
            return <New children={<Component {...this.props} />} />;
        } else if (this.props.views >= 1000) {
            return <Popular children={<Component {...this.props} />} />;
        } else {
            return <Component {...this.props}/>
        }
    }
} }