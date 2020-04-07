import { TRANSLATE_IMAGE, TRANSLATE_TEXT_SUCCESS, TRANSLATE_TEXT_ERROR, RESET_LOADING_TEXT } from './constants';

export function translateImage() {
    return {
      type: TRANSLATE_IMAGE,
      //image_
    };
  }


export function textTranslated(t_text) {
  return {
    type: TRANSLATE_TEXT_SUCCESS,
    t_text
  }
}  

export function textTranslationError(error) {
  return {
    type: TRANSLATE_TEXT_ERROR,
    error
  }
}  

export function resetLoadingText() {
  return {
    type: RESET_LOADING_TEXT
  }
} 
