import { combineReducers } from "redux";

import mainPageReducer from "../screens/MainPage/reducer";
import openCameraReducer from "../screens/OpenCameraPage/reducer";
import accessPhotoReducer from "../screens/AccessPhotoPage/reducer";
import displayReducer from "../screens/DisplayPage/reducer";

export default combineReducers({
  main: mainPageReducer,
  open: openCameraReducer,
  access: accessPhotoReducer,
  display: displayReducer
});
