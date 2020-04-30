import produce from "immer";
import {
  EXTRACT_TEXT,
  EXTRACT_TEXT_ERROR,
  EXTRACT_TEXT_SUCCESS
} from "./constants";

export const initialState = {
  loading: false,
  error: false,
  text: "",
  lang: null,
};

const accessPhotoReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case EXTRACT_TEXT:
        draft.loading = true;
        draft.text = "";
        draft.error = false;
        draft.lang = null
        break;

      case EXTRACT_TEXT_SUCCESS:
        draft.loading = false;
        draft.text = action.e_text;
        draft.lang = action.language;
        break;

      case EXTRACT_TEXT_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;

    }
  });

export default accessPhotoReducer;
