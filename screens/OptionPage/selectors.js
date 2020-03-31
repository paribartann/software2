import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectOption = state => state.option || initialState;

const makeSelectHasPermission = () =>
  createSelector(
    selectOption,
    optionState => optionState.hasPermission,
  );

  const makeSelectType = () =>
  createSelector(
    selectOption,
    optionState => optionState.type_,
  );

export { selectOption, makeSelectHasPermission, makeSelectType };