import { SET_BOOKMARKS, ADD_BOOKMARK } from "../actions";

export default function(state = [], action) {
  switch (action.type) {
    case SET_BOOKMARKS:
      return action.payload;
    case ADD_BOOKMARK:
      return [action.payload, ...state];
    default: {
      return state;
    }
  }
}
