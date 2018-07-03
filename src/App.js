import React, { Component } from "react";
import BookmarksTable from "./components/BookmarksTable/BookmarksTable";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="ui grid container">
        <div className="sixteen column">
          <BookmarksTable />
        </div>
      </div>
    );
  }
}

export default App;
