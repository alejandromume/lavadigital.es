import React from "react";

class Split extends React.Component {
  target = React.createRef();

  split = () => {
    if (this.target.current) {
      Splitting({ target: this.target.current });
    }
  };

  componentDidMount = this.split;
  componentDidUpdate = this.split;

  render() {
    if (this.props.tag === 'span') return <span ref={this.target}>{this.props.children}</span>;
    else if (this.props.tag === 'a') return <a href={this.props.href} className={this.props.className} ref={this.target}>{this.props.children}</a>;
    return <div ref={this.target}>{this.props.children}</div>;
  }
}

export default Split;
