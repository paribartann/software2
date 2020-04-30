
import {  put, select, takeLatest } from "redux-saga/effects";

import {  TRANSLATE_TEXT } from "./constants";

import { makeSelectEText } from "./selectors";
import {makeSelectText} from "../AccessPhotoPage/selectors"
import { makeSelectTranslateToCode } from "./selectors"

import { textTranslationSuccess, textTranslationError, setShowBox } from "./actions";
import {saveEText } from "../AccessPhotoPage/actions"
import axios from "axios";

function* translatingText() {
  //yield(put(setShowBox()));

  const url = "https://0f3d157f.ngrok.io/translateText"
  const text_ = yield select(makeSelectEText());

  const code_ = yield select(makeSelectTranslateToCode());

  var data_ = {
      text : text_,
      code: code_
  };

  console.log("DATA: ", data_);
  const options = {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    data: data_,
    url,
  };

  try {
    const res = yield axios(options)

    const { translatedText } = res.data;
    console.log(translatedText);
    
    
    yield put(textTranslationSuccess(translatedText));
  } catch (err) {
    console.log(err);
    yield put(textTranslationError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* translate() {
  yield takeLatest(TRANSLATE_TEXT, translatingText);
}
