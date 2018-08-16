import { combineReducers } from "redux";

import PostReducer from "./PostReducer";
import SettingsReducer from "./SettingsReducer";

export default combineReducers({
  postFeed: PostReducer,
  settings: SettingsReducer
});
