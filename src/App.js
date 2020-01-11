import React, { Component } from "react";
import HomeView from "./components/HomeView";
import CategorySelectionView from "./components/CategorySelectionView";
import NewEntryView from "./components/NewEntryView";

class App extends Component {
  state = { location: "home" };

  getView() {
    const { location } = this.state;
    switch (location) {
      case "home":
        return <HomeView />;
      case "categorySelection":
        return <CategorySelectionView />;
      case "newEntry":
        return <NewEntryView />;
      default:
        return null;
    }
  }

  onButtonClick = event => {
    this.setState({ location: event.target.value });
  };

  render() {
    return (
      <>
        <button onClick={this.onButtonClick} value="home">
          Home
        </button>
        <button onClick={this.onButtonClick} value="categorySelection">
          Category Selection
        </button>
        <button onClick={this.onButtonClick} value="newEntry">
          New Entry
        </button>

        {this.getView()}
      </>
    );
  }
}

export default App;
