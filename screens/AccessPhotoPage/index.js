import React, { useEffect, memo, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  Dimensions,
} from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { makeSelectImage } from "../OpenCameraPage/selectors";
import { extractText } from "./actions";

import styled from "styled-components";

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height) * 0.9;

export function AccessPhotoPage({ image_, handleTranslateImage, navigation }) {
  console.log(image_);
  return (
    <ContainerView>
      <ImageView>
        <Image
          source={{ uri: image_.uri }}
          style={{ width: screenWidth, height: screenHeight, flex: 1 }}
          resizeMode="contain"
        ></Image>
      </ImageView>
      <ButtonView>
        <Button onPress={() => handleTranslateImage(image_, navigation)}>
          <ButtonText>Extract Text</ButtonText>
        </Button>
      </ButtonView>
    </ContainerView>
  );
}

AccessPhotoPage.propTypes = {
  handleTranslateImage: PropTypes.func,
  image_: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  image_: makeSelectImage(),
});

export function mapDispatchToProps(dispatch) {
  return {
    handleTranslateImage: async (image_, navigation) => {
      const desp = await dispatch(extractText(image_));
      console.log("DESP", desp);
      navigation.navigate("Display");
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(AccessPhotoPage);

const ContainerView = styled.View`
  flex: 1;
  background-color: silver;
`;

const ImageView = styled.View`
  flex: 3;
  align-items: center;
  justify-content: center;
  background-color: ghostwhite;
  margin: 10px;
`;

const ButtonView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Button = styled.TouchableOpacity`
  margin-top: 15;
  border-radius: 15;
  height: 100;
  width: 90%;
  justify-content: center;
  align-items: center;
  background-color: slategray;
`;

const ButtonText = styled.Text`
  font-weight: bold;
  font-size: 50;
  font-family: "Cochin";
`;

