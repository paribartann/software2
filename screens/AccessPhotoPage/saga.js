/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from "redux-saga/effects";

import { EXTRACT_TEXT } from "./constants";

import { makeSelectImage } from "../OpenCameraPage/selectors";
import { textExtractError, textExtractSuccess } from "./actions";
import axios from "axios";

function* extractingText() {
  console.log("reached here extract saga!");
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
      "https://ce2c226a.ngrok.io/extractText",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }
    );

    const { extractedText, language } = res.data;
    console.log(extractedText);
    yield put(textExtractSuccess(extractedText, language));
  } catch (err) {
    console.log(err);
    yield put(textExtractError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* extract() {
  yield takeLatest(EXTRACT_TEXT, extractingText);
}
