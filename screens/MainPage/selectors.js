import { createSelector } from "reselect";
import { initialState } from "./reducer";

const selectMain = (state) => state.main || initialState;

const makeSelectHasPermission = () =>
  createSelector(selectMain, (mainState) => mainState.hasPermission);

const makeSelectType = () =>
  createSelector(selectMain, (mainState) => mainState.type_);

export { selectMain, makeSelectHasPermission, makeSelectType };
