import { INIT_BOOKMARKS } from "../actions";

export default function(state = [], action) {
  switch (action.type) {
    case INIT_BOOKMARKS:
      return action.payload;
    default: {
      return state;
    }
  }
}
