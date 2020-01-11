import React, { Component } from "react";

class EntryForm extends Component {
  state = {
    entry: "",
    error: ""
  };

  onTextareaChange = event => {
    this.setState({ entry: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    const { entry } = this.state;
    const { onEntryFormSubmit } = this.props;

    if (entry) {
      return onEntryFormSubmit(entry);
    }

    return this.setState({ error: "Entry cannot be blank" });
  };

  render() {
    const { entry, error } = this.state;
    return (
      <form onSubmit={this.onFormSubmit}>
        {error}
        <div>
          <textarea value={entry} onChange={this.onTextareaChange}></textarea>
        </div>
        <input type="submit" value="Create New Entry" />
      </form>
    );
  }
}

export default EntryForm;
