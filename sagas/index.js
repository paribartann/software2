
import { extract } from '../screens/AccessPhotoPage/saga';
import { translate } from '../screens/DisplayPage/saga';
import {  fork, all } from "redux-saga/effects";

export default function* rootSaga() {
    yield all([
        fork(extract),
        fork(translate)
    ]);
}