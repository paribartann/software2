import produce from 'immer';
import { OPEN_CAMERA } from './constants';

// The initial state of the App
export const initialState = {
  hasPermission: false,
  type_: null,
};

/* eslint-disable default-case, no-param-reassign */
const openCameraReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case OPEN_CAMERA:
        // Delete prefixed '@' from the github username
        console.log("R HP: ",action.hasPermission);
        console.log("R T: ",action.type_);
        draft.hasPermission = action.hasPermission;
        draft.type_ = action.type_;
        break;
    }
  });

export default openCameraReducer;