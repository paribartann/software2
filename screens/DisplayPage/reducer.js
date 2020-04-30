import produce from "immer";
import {
  TRANSLATE_TEXT,
  SET_TRANSLATE_TO,
  TRANSLATE_TEXT_SUCCESS,
  TRANSLATE_TEXT_ERROR,
  SET_SHOW_BOX,
  SAVE_E_TEXT
} from "./constants";

export const initialState = {
  translation_loading: false,
  translation_error: false,
  translated_text: "",
  lang_code: "",
  extracted_text: "",
  showBox: false,
  iniLang: null
};

const displayReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case TRANSLATE_TEXT:
        draft.translation_loading = true;
        draft.translated_text = "";
        draft.error = false;
        break;

      case SET_TRANSLATE_TO:
        draft.lang_code = action.code;
        break;

      case TRANSLATE_TEXT_SUCCESS:
        draft.translation_loading = false;
        draft.translated_text = action.t_text;
        break;

      case TRANSLATE_TEXT_ERROR:
        draft.ranslation_error = action.error;
        draft.translation_loading = false;
        break;

      case SET_SHOW_BOX:
        draft.showBox = true;

      case SAVE_E_TEXT:
        draft.extracted_text = action.e_text;
        draft.iniLang = action.lang;
        break;
    }
  });

export default displayReducer;
