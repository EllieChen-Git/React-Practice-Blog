import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomeView extends Component {
  render() {
    // console.log(this.props);
    return (
      <>
        <h1>Home</h1>
        <div></div>

        <Link to="/category">
          <button>Select Category</button>
        </Link>
      </>
    );
  }
}

export default HomeView;
