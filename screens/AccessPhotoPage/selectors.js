import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectAccess = state => state.access || initialState;

const makeSelectLoading = () =>
  createSelector(
    selectAccess,
    accessState => accessState.loading,
  );

  const makeSelectError = () =>
  createSelector(
    selectAccess,
    accessState => accessState.error,
  );

  const makeSelectText = () =>
  createSelector(
    selectAccess,
    accessState => accessState.text,
  );

export { selectAccess, makeSelectLoading, makeSelectError, makeSelectText };