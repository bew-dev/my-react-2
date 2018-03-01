import React from "react";

// import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';

import Footer from "./Footer/Footer";
import Header from "./Header/Header";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome",
    };
  }

  changeTitle(title) {
    this.setState({title});
  }

  render() {
    return (
      <div className="container-fluid">

        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />

        {/* <div id="jumbotronExample"></div> */}
        <div className="jumbotron bg-info">
          <h1 className="display-3">Hello, world!</h1>
          <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr className="my-4" />
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <p className="lead">
            <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
          </p>
        </div>

        <Footer />

      </div>
    );
  }
}
