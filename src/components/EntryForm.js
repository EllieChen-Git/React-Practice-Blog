import React, { Component } from "react";

class EntryForm extends Component {
  state = {
    entry: ""
  };

  onTextareaChange = event => {
    this.setState({ entry: event.target.value });
  };

  render() {
    const { entry } = this.state;
    return (
      <form>
        <div>
          <textarea value={entry} onChange={this.onTextareaChange}></textarea>
        </div>
        <input type="submit" value="Create New Entry" />
      </form>
    );
  }
}

export default EntryForm;
