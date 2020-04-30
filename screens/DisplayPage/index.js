import React, { memo, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import PropTypes, { object } from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import * as Progress from "react-native-progress";
import languages from "../../files/json/language.json";
import styled from "styled-components";

let country_arr = [];

languages.forEach((obj) => {
  country_arr.push(obj[Object.keys(obj)].name);
});

import {
  makeSelectLoading,
  makeSelectText,
  makeSelectInitialLanguage,
} from "../AccessPhotoPage/selectors";

import {
  makeSelectTranslatedText,
  makeSelectTranslationLoading,
  makeSelectShowBox,
  makeSelectEText,
  makeSelectIniLang,
} from "./selectors";

import { setTranslateToVariable, translateText } from "./actions";

import ModalDropdown from "react-native-modal-dropdown";

export function DisplayPage({
  loading,
  e_text,
  iniLang,
  onTranslateToSelect,
  handleTranslateText,
  t_loading,
  t_text,
}) {
  console.log("E_TEXT", e_text);
  console.log("T_TEXT", t_text);
  let originalIndex;
  let ComponentToRender, TranslateToComponentToRender, TranslationRender;

  const isLanguage = (object) => object[Object.keys(object)].code === iniLang;
  originalIndex = languages.findIndex(isLanguage);
  console.log(originalIndex);

  if (loading) {
    ComponentToRender = (
      <Progress.CircleSnail color={["red", "green", "blue"]} size={100} />
    );
  } else {
    ComponentToRender = (
      <View style={{ justifyContent: "center" }}>
        <ExtractedText> {e_text}</ExtractedText>
      </View>
    );
  }

  if (!loading) {
    TranslateToComponentToRender = (
      <TranslateToView>
        <TranslateToViewTop>
          <ModalDropdown
            options={country_arr}
            defaultIndex={originalIndex}
            defaultValue={country_arr[originalIndex]}
            style={styles.button}
            textStyle={styles.textStyles}
            dropdownStyle={styles.dropDownTextStyle}
          />
          <Text style={styles.textStyles}>To -></Text>
          <ModalDropdown
            options={country_arr}
            onSelect={(index) => onTranslateToSelect(index, languages)}
            style={styles.button}
            textStyle={styles.textStyles}
            dropdownStyle={styles.dropDownTextStyle}
          />
        </TranslateToViewTop>

        <TranslateToViewBottom>
          <Button onPress={() => handleTranslateText()}>
            <ButtonText>Translate Text</ButtonText>
          </Button>
        </TranslateToViewBottom>
      </TranslateToView>
    );
  }

  if (!loading) {
    if (t_loading) {
      TranslationRender = (
        <Progress.CircleSnail color={["red", "green", "blue"]} size={100} />
      );
    }

    if (!t_loading && t_text) {
      TranslationRender = <TranslatedText>{t_text}</TranslatedText>;
    }
  }

  return (
    <ContainerView>
      <ExtractView>
        <TitleText>Extracted Text</TitleText>
        {ComponentToRender}
      </ExtractView>

      {TranslateToComponentToRender}

      <TranslateView>
        <TitleText>Translated Text</TitleText>
        {TranslationRender}
      </TranslateView>
    </ContainerView>
  );
}

DisplayPage.propTypes = {
  loading: PropTypes.bool,
  e_text: PropTypes.string,
  iniLang: PropTypes.string,
  onTranslateToSelect: PropTypes.func,
  handleTranslateText: PropTypes.func,
  t_loading: PropTypes.bool,
  t_text: PropTypes.string,
  show: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  e_text: makeSelectEText(),
  iniLang: makeSelectIniLang(),
  t_loading: makeSelectTranslationLoading(),
  t_text: makeSelectTranslatedText(),
  show: makeSelectShowBox(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onTranslateToSelect: (index, languages) => {
      dispatch(
        setTranslateToVariable(
          languages[index][Object.keys(languages[index])].code
        )
      );
    },

    handleTranslateText: () => {
      dispatch(translateText());
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(DisplayPage);

const ContainerView = styled.View`
  flex: 1;
  background-color: silver;
`;

const ExtractView = styled.View`
  flex: 2;
  background-color: #98d2c1;
  align-items: center;
`;

const TranslateToView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const TranslateToViewTop = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const TranslateToViewBottom = styled.View`
  flex: 2;
`;

const TranslateView = styled.View`
  flex: 2;
  background-color: #98d2c1;
  align-items: center;
`;

const Button = styled.TouchableOpacity`
  margin-top: 15;
  border-radius: 15;
  height: 80;
  width: 90%;
  justify-content: center;
  align-items: center;
  background-color: slategray;
`;

const ButtonText = styled.Text`
  font-weight: bold;
  font-size: 32;
  font-family: "Cochin";
`;

const TitleText = styled.Text`
  font-family: "Times New Roman";
  font-size: 32px;
  margin-top: 5px;
  margin-bottom: 0px;
  text-align: center;
  font-weight: normal;
  color: #222;
`;

const ExtractedText = styled.Text`
  font-size: 24;
  font-family: "Cochin";
  padding: 10px;
  border: solid 1px;
`;

const TranslatedText = styled.Text`
  font-size: 24;
  font-family: "Cochin";
  padding: 10px;
  border: solid 1px;
`;

const styles = StyleSheet.create({
  button: {
    marginTop: 15,
    padding: 10,
    borderRadius: 15,
    height: "80%",
    width: "38%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "grey",
  },
  textStyles: {
    fontWeight: "bold",
    fontSize: 20,
    fontFamily: "Cochin",
  },
  dropDownTextStyle: {
    fontSize: 24,
    fontFamily: "Cochin",
    color: "black",
  },
});
