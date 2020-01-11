import React, { Component } from "react";
import { Link } from "react-router-dom";

class CategorySelectionView extends Component {
  static defaultProps = {
    categories: []
  };
  render() {
    const { categories } = this.props;
    return (
      <>
        <h1>What do you like to blog today?</h1>
        <Link to="/entry">
          <ul>
            {categories.map((category, index) => {
              return (
                <li key={category}>
                  <Link to={`/entry/new/${index}`}>{category}</Link>
                </li>
              );
            })}
          </ul>
        </Link>
      </>
    );
  }
}

export default CategorySelectionView;
