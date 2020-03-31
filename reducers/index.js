import { combineReducers } from "redux";

import openCameraReducer from "../screens/OptionPage/reducer";

export default combineReducers({
  open: openCameraReducer
});
