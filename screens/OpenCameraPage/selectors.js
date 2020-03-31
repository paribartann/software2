import { createSelector } from 'reselect';
import { initialState } from '../OptionPage/reducer';

const selectOpen = state => state.open || initialState;


  const makeSelectType = () =>
  createSelector(
    selectOpen,
    openState => openState.type_,
  );

export { selectOpen, makeSelectType };