import { ADD_BOOKMARK, SET_BOOKMARKS } from "./types";

export const addBookmark = bookmark => {
  // check if there's something in the local storage
  if (localStorage.getItem("bookmarks")) {
    // if there is, just put our new bookmark in the existing array
    localStorage.setItem(
      "bookmarks",
      JSON.stringify([
        bookmark,
        ...JSON.parse(localStorage.getItem("bookmarks"))
      ])
    );
  } else {
    // otherwise, set a new array with just our new item
    localStorage.setItem("bookmarks", JSON.stringify([bookmark]));
  }
  return {
    type: ADD_BOOKMARK,
    payload: bookmark
  };
};

export const setBookmarks = bookmarks => {
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  return {
    type: SET_BOOKMARKS,
    payload: bookmarks
  };
};
