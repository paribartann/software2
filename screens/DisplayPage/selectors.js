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

  const makeSelectEText = () =>
  createSelector(
    selectDisplay,
    displayState => displayState.extracted_text,
  );

  const makeSelectIniLang = () =>
  createSelector(
    selectDisplay,
    displayState => displayState.iniLang,
  );

export { selectDisplay, makeSelectTranslateToCode, makeSelectTranslatedText, makeSelectTranslationLoading, makeSelectTranslationError, makeSelectShowBox, makeSelectEText, makeSelectIniLang};