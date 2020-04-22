import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectDisplay = state => state.display || initialState;

const makeSelectTranslateToCode = () =>
  createSelector(
    selectDisplay,
    displayState => displayState.lang_code,
  );

  const makeSelectTranslatedText = () =>
  createSelector(
    selectDisplay,
    displayState => displayState.translated_text,
  );

  const makeSelectTranslationLoading = () =>
  createSelector(
    selectDisplay,
    displayState => displayState.translation_loading,
  );

  const makeSelectTranslationError = () =>
  createSelector(
    selectDisplay,
    displayState => displayState.translation_error,
  );

  const makeSelectShowBox = () =>
  createSelector(
    selectDisplay,
    displayState => displayState.showBox,
  );

export { selectDisplay, makeSelectTranslateToCode, makeSelectTranslatedText, makeSelectTranslationLoading, makeSelectTranslationError, makeSelectShowBox };