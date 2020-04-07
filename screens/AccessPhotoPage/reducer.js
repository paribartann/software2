import produce from "immer";
import {
  TRANSLATE_TEXT_ERROR,
  TRANSLATE_TEXT_SUCCESS,
  RESET_LOADING_TEXT
} from "./constants";

export const initialState = {
  loading: false,
  error: false,
  text: ""
};

const accessPhotoReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case TRANSLATE_TEXT_SUCCESS:
        draft.loading = true;
        draft.text = action.t_text;
        break;

      case TRANSLATE_TEXT_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;

      case RESET_LOADING_TEXT:
        draft.text = "";
        draft.loading = false;
        break;
    }
  });

export default accessPhotoReducer;
