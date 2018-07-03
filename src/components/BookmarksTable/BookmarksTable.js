import React, { Component } from "react";

import { connect } from "react-redux";

import "./BookmarksTable.css";

class BookmarksTable extends Component {
  renderBookmark = bookmark => {
    return (
      <tr key={bookmark.url}>
        <td>{bookmark.url}</td>
        <td>{bookmark.desc}</td>
        <td>{bookmark.tags.map(this.renderTags)}</td>
      </tr>
    );
  };

  renderTags = tag => {
    return (
      <div className="ui teal label" key={tag}>
        {tag}
      </div>
    );
  };

  render() {
    return (
      <table className="ui teal celled striped table">
        <thead>
          <tr>
            <th>URL</th>
            <th>Description</th>
            <th>Tags</th>
          </tr>
        </thead>
        <tbody>{this.props.bookmarks.map(this.renderBookmark)}</tbody>
      </table>
    );
  }
}

const mapStateToProps = state => {
  return { bookmarks: state.bookmarks };
};

export default connect(mapStateToProps)(BookmarksTable);
