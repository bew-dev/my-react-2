import React from "react";

import Title from "./Title";

export default class Header extends React.Component {
  handleChange(e) {
    const title = e.target.value;
    this.props.changeTitle(title);
  }

  render() {
    return (
      <div>
        <div class="row">
          <Title title={this.props.title} />
        </div>
        <div class="row mb-2">
          <input value={this.props.title} onChange={this.handleChange.bind(this)} />
        </div>
      </div>
    );
  }
}
