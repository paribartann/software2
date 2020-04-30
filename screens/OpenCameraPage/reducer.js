import produce from "immer";
import { CHANGE_CAMERA_TYPE, TAKE_PICTURE } from "./constants";

export const initialState = {
  image_object: null,
  cam_type_: null
};


/* eslint-disable default-case, no-param-reassign */
const openCameraReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_CAMERA_TYPE:
        draft.cam_type_ = action.type_;
        break;
      case TAKE_PICTURE:
        draft.image_object = action.image_;
        break;
    }
  });

export default openCameraReducer;
