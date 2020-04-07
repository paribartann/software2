import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectOpen = state => state.open || initialState;



  const makeSelectType = () =>
  createSelector(
    selectOpen,
    openState => openState.cam_type_,
  );

  const makeSelectImage = () =>
  createSelector(
    selectOpen,
    openState => openState.image_object,
  );


export { selectOpen, makeSelectType, makeSelectImage };