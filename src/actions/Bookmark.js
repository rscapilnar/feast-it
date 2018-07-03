import { ADD_BOOKMARK } from "./types";

export const addBookmark = bookmark => {
  // TODO: Update localStorage
  return {
    type: ADD_BOOKMARK,
    payload: bookmark
  };
};
