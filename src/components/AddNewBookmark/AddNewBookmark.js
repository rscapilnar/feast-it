import React, { Component } from "react";
import { connect } from "react-redux";

import { Field, reduxForm } from "redux-form";

import * as actions from "../../actions";

import "./AddNewBookmark.css";

class AddNewBookmark extends Component {
  // handle adding the bookmark to the store once ReduxForm says it's alright to add
  addBookmark = values => {
    // create bookmark object from values
    const bookmark = {
      url: values.url,
      desc: values.desc,
      tags: values.tags.trim().split(",") //split trimmed tags string into array
    };
    // call action creator with our bookmark object
    this.props.addBookmark(bookmark);
    // call the reset function put on the component's props by ReduxForm, to clear the form
    this.props.reset();
  };

  // renderer for inputs
  renderField = field => {
    // pull meta properties added by ReduxForm to the field info passed to the renderer
    const {
      meta: { touched, error }
    } = field;
    // decide classes to append based on meta props
    const className = `${touched && error ? "field error" : "field"}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input type="text" placeholder={field.label} {...field.input} />
        {field.description ? (
          <div className="field-description"> {field.description} </div>
        ) : (
          ""
        )}
        {touched && error ? (
          <div className="ui pointing red basic label">{error}</div>
        ) : (
          ""
        )}
      </div>
    );
  };

  render() {
    const { handleSubmit, valid } = this.props;
    return (
      <div>
        <h3>Add new Bookmark</h3>
        <form
          onSubmit={handleSubmit(this.addBookmark)}
          className="add-new-form"
        >
          <div className="ui form">
            <div className="three fields">
              <Field name="url" component={this.renderField} label="URL" />
              <Field
                name="desc"
                component={this.renderField}
                label="Description"
              />
              <Field
                name="tags"
                component={this.renderField}
                label="Tags"
                description="Comma-separated list of tags"
              />
            </div>
            <button
              type="submit"
              className={`ui animated large teal button ${
                !valid ? "disabled" : ""
              }`}
            >
              <div className="visible content">Add</div>
              <div className="hidden content">
                <i className="far fa-plus" />
              </div>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

// validator for ReduxForm. Gets passed object of values with keys representing Field names
// Expected to return object containing errors for keys matching Field names, or empty if valid
const validate = values => {
  let errors = {};
  // set up url validator
  const urlRegexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
  // if no url entered
  if (!values.url) {
    errors.url = "Please enter a URL";
  }
  // if url entered but not valid
  else if (!urlRegexp.test(values.url)) {
    errors.url = "That doesn't look like a URL to me";
  }
  return errors;
};

export default reduxForm({ form: "addBookmarkForm", validate })(
  connect(
    null,
    actions
  )(AddNewBookmark)
);
