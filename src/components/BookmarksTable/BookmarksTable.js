import React, { Component } from "react";

import { connect } from "react-redux";
import _ from "lodash";

import * as actions from "../../actions";

import "./BookmarksTable.css";

class BookmarksTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: ""
    };
  }

  renderBookmark = bookmark => {
    return (
      <tr key={bookmark.url}>
        <td>
          <a href={bookmark.url} target="_blank">
            {bookmark.url}
          </a>
        </td>
        <td>{bookmark.desc}</td>
        <td>{bookmark.tags.map(this.renderTags)}</td>
        <td>
          <button
            className="ui tiny negative button"
            onClick={() => {
              this.removeBookmark(bookmark);
            }}
          >
            Remove
          </button>
        </td>
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

  removeBookmark = bookmark => {
    // get the index to remove by comparing the url
    const index = _.findIndex(this.props.bookmarks, { url: bookmark.url });
    this.props.setBookmarks([
      ...this.props.bookmarks.slice(0, index),
      ...this.props.bookmarks.slice(index + 1)
    ]);
  };

  onSearchChange = event => {
    this.setState({ searchString: event.target.value });
  };

  render() {
    return (
      <div>
        <div className="ui icon input search-wrapper">
          <i className="icon">
            <i className="far fa-search" />
          </i>
          <input
            type="text"
            placeholder="Search ..."
            onChange={this.onSearchChange}
          />
        </div>
        <table className="ui teal celled striped table bookmarks">
          <thead>
            <tr>
              <th>URL</th>
              <th>Description</th>
              <th>Tags</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.props.bookmarks
              .filter(
                bookmark =>
                  bookmark.url.includes(this.state.searchString) ||
                  bookmark.desc.includes(this.state.searchString) ||
                  bookmark.tags.includes(this.state.searchString)
              )
              .map(this.renderBookmark)}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { bookmarks: state.bookmarks };
};

export default connect(
  mapStateToProps,
  actions
)(BookmarksTable);
