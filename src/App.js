import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomeView from "./components/HomeView";
import CategorySelectionView from "./components/CategorySelectionView";
import NewEntryView from "./components/NewEntryView";

class App extends Component {
  state = {
    categories: ["work", "study", "life"],
    entries: []
  };

  onEntryFormSubmit = value => {
    let { entries } = this.state;
    this.setState({ entries: [...entries, value] });
    //   this.setState(state => {
    //     return { entries: [...state.entries, value]};
    // });
  };

  render() {
    const { categories } = this.state;
    return (
      <div>
        <BrowserRouter>
          <Route exact path="/" component={HomeView} />
          <Route
            exact
            path="/category"
            render={props => {
              return (
                <CategorySelectionView {...props} categories={categories} />
              );
            }}
          />
          <Route
            exact
            path="/entry/new/:id"
            render={props => {
              return (
                <NewEntryView
                  {...props}
                  categories={categories}
                  onEntryFormSubmit={this.onEntryFormSubmit}
                />
              );
            }}
          />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
