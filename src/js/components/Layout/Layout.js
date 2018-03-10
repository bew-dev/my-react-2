import React from "react";

import { Link } from "react-router-dom";
// import { Link } from "react-router";

import Footer from "./Footer/Footer";
import Header from "./Header/Header";

export default class Layout extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     title: "Welcome",
  //   };
  // }

  // changeTitle(title) {
  //   this.setState({title});
  // }
  // navigate() {
  //   console.log(this.props);
  // }
  render() {
    return (
      <div className="container-fluid">
        {/* <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} /> */}
        <Header />
        <div className="jumbotron bg-info">
          <h1 className="display-3">Hello, world!</h1>
          <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr className="my-4" />
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>

          <main>{this.props.children}</main>

          <p className="lead">
            <a className="btn btn-primary btn-lg" href="/archives" role="button">Archives</a>
            {/* Link is NOT allowed outside the router component, how can I
            get it inside?  Isnt this loaded via router? */}
            <Link to="archives">Archives</Link>
          </p>
        </div>
        <Footer />
      </div>
    );
  }
}
