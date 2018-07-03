import { combineReducers } from "redux";

import BookmarksReducer from "./reduce_bookmarks";
import { reducer as FormReducer } from "redux-form";

const rootReducer = combineReducers({
  bookmarks: BookmarksReducer,
  form: FormReducer
});

export default rootReducer;
