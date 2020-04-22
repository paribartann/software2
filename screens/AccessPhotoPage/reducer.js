import produce from "immer";
import {
  EXTRACT_TEXT_ERROR,
  EXTRACT_TEXT_SUCCESS,
  RESET_LOADING_TEXT
} from "./constants";

export const initialState = {
  loading: false,
  error: false,
  text: "",
  lang: null
};

const accessPhotoReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case EXTRACT_TEXT_SUCCESS:
        draft.loading = true;
        draft.text = action.e_text;
        draft.lang = action.language;
        break;

      case EXTRACT_TEXT_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;

      case RESET_LOADING_TEXT:
        draft.loading = false;
        break;
    }
  });

export default accessPhotoReducer;
