import produce from "immer";
import {
  SET_TRANSLATE_TO,
  TRANSLATE_TEXT_SUCCESS,
  TRANSLATE_TEXT_ERROR,
  SET_SHOW_BOX
} from "./constants";

export const initialState = {
  translation_loading: false,
  translation_error: false,
  translated_text: "",
  lang_code: "",
  showBox: false
};

const displayReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_TRANSLATE_TO:
        draft.lang_code = action.code;
        break;

      case TRANSLATE_TEXT_SUCCESS:
        draft.translation_loading = true;
        draft.translated_text = action.t_text;
        break;

      case TRANSLATE_TEXT_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;

      case SET_SHOW_BOX:
        draft.showBox = true;
    }
  });

export default displayReducer;
