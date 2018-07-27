import React from "react";

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idx: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({idx: e.currentTarget.innerText - 1});
  }

  render() {
    return(
      <div className={"tabs"}>
        <h1>Best Frickin Tabs</h1>
        <ul>
          <h1 onClick={this.handleClick}>{this.props.tabs[0].title}</h1>
          <h1 onClick={this.handleClick}>{this.props.tabs[1].title}</h1>
          <h1 onClick={this.handleClick}>{this.props.tabs[2].title}</h1>
        </ul>
        <article>{this.props.tabs[this.state.idx].content}</article>
      </div>
    );
  }

}


export default Tabs;
