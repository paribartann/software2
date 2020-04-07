import { combineReducers } from "redux";

import optionPageReducer from "../screens/OptionPage/reducer";
import openCameraReducer from "../screens/OpenCameraPage/reducer";
import accessPhotoReducer from "../screens/AccessPhotoPage/reducer";

export default combineReducers({
  option: optionPageReducer,
  open: openCameraReducer,
  access: accessPhotoReducer
});
