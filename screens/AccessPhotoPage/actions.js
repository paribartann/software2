import { EXTRACT_TEXT, EXTRACT_TEXT_SUCCESS, EXTRACT_TEXT_ERROR, RESET_LOADING_TEXT } from './constants';

export function extractText() {
    return {
      type: EXTRACT_TEXT,
    };
  }


export function textExtractSuccess(e_text, language) {
  return {
    type: EXTRACT_TEXT_SUCCESS,
    e_text,
    language
  }
}  

export function textExtractError(error) {
  return {
    type: EXTRACT_TEXT_ERROR,
    error
  }
}  

export function resetLoadingText() {
  return {
    type: RESET_LOADING_TEXT
  }
} 

