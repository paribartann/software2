import { SET_TRANSLATE_TO, TRANSLATE_TEXT, TRANSLATE_TEXT_SUCCESS, TRANSLATE_TEXT_ERROR, SET_SHOW_BOX } from './constants';

export function setTranslateToVariable(code) {
    return {
      type: SET_TRANSLATE_TO,
      code  
    };
  }


  export function translateText() {
    return {
      type: TRANSLATE_TEXT,
    };
  }



export function textTranslationSuccess(t_text) {
  return {
    type: TRANSLATE_TEXT_SUCCESS,
    t_text,
  }
}  

export function textTranslationError(error) {
  return {
    type: TRANSLATE_TEXT_ERROR,
    error
  }
}  

export function setShowBox() {
  return {
    type: SET_SHOW_BOX
  }
} 
