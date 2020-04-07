/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from "redux-saga/effects";

import { TRANSLATE_IMAGE } from "./constants";

import { makeSelectImage } from "../OpenCameraPage/selectors";
import { textTranslated, textTranslationError } from "./actions";
import axios from "axios";

function* translateImage() {
  console.log("reached here!");
  const file = yield select(makeSelectImage());
  //console.log(file);
  const uri = file.uri;
  const uriParts = uri.split(".");
  const fileType = uriParts[uriParts.length - 1];

  const formData = new FormData();
  formData.append("photo", {
    uri,
    name: `photo.${fileType}`,
    type: `image/${fileType}`
  });

  try {
    const res = yield axios.post(
      "https://783f85e1.ngrok.io/translateImage",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }
    );

    const { translatedText } = res.data;
    console.log(translatedText);
    yield put(textTranslated(translatedText));
  } catch (err) {
    console.log(err);
    yield put(textTranslationError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* translate() {
  yield takeLatest(TRANSLATE_IMAGE, translateImage);
}
