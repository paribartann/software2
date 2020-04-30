import produce from "immer";
import { OPEN_CAMERA, CHANGE_CAMERA_TYPE } from "./constants";


export const initialState = {
  hasPermission: false,
  type_: null
};

const mainPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case OPEN_CAMERA:
        
        draft.hasPermission = action.hasPermission;
        draft.type_ = action.type_;
        break;
      case CHANGE_CAMERA_TYPE:
        draft.type_ = action.type_;
        break;
    }
  });

export default mainPageReducer;
