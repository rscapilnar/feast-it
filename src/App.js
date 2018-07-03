import React, { Component } from "react";
import BookmarksTable from "./components/BookmarksTable/BookmarksTable";
import AddNewBookmark from "./components/AddNewBookmark/AddNewBookmark";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="ui grid container">
        <div className="row">
          <div className="sixteen column">
            <BookmarksTable />
          </div>
        </div>
        <div className="row">
          <div className="sixteen column">
            <AddNewBookmark />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
