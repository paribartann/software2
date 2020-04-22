import produce from "immer";
import { OPEN_CAMERA, CHANGE_CAMERA_TYPE } from "./constants";

// The initial state of the App
export const initialState = {
  hasPermission: false,
  type_: null
};

/* eslint-disable default-case, no-param-reassign */
const mainPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case OPEN_CAMERA:
        // Delete prefixed '@' from the github username
        draft.hasPermission = action.hasPermission;
        draft.type_ = action.type_;
        break;
      case CHANGE_CAMERA_TYPE:
        draft.type_ = action.type_;
        break;
    }
  });

export default mainPageReducer;
