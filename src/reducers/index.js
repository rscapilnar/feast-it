import { combineReducers } from "redux";

import BookmarksReducer from "./reduce_bookmarks";

const rootReducer = combineReducers({
  bookmarks: BookmarksReducer
});

export default rootReducer;
