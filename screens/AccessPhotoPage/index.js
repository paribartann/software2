import React, { useEffect, memo, useRef } from "react";
import {
  Image,
  Dimensions,
  NativeModules,
  TouchableOpacity,
  Alert,
} from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import ImagePicker from "react-native-image-crop-picker";

import { makeSelectImage } from "../OpenCameraPage/selectors";
import { extractText } from "./actions";

import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import ImageResizer from "react-native-image-resizer";
import { savePicture } from "../OpenCameraPage/actions";
import * as ImageManipulator from 'expo-image-manipulator';

//var ImagePicker = NativeModules.ImageCropPicker;

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height) * 0.9;

export function AccessPhotoPage({
  image_,
  handleExtactText,
  navigation,
  handleResize,
}) {
  return (
    <ContainerView>
      <ImageView>
        <Image
          source={{ uri: image_.uri }}
          style={{ width: screenWidth, height: screenHeight, flex: 1 }}
          resizeMode="contain"
        ></Image>
        {/* <TouchableOpacity
          style={{
            alignSelf: "flex-end",
            alignItems: "center",
            backgroundColor: "transparent",
          }}
          onPress={() =>
            ImagePicker.openPicker({
              path: image_.uri,
              width: 300,
              height: 400,
            }).then((image) => {
              console.log(image);
            })
          }
        >
          <Ionicons name="ios-crop" style={{ color: "black", fontSize: 40 }} />
        </TouchableOpacity> */}
      </ImageView>

      <ButtonView>
        <Button
          onPress={() => {
            handleResize(image_.uri)
            handleExtactText(navigation);
          }}
        >
          <ButtonText>Extract Text</ButtonText>
        </Button>
      </ButtonView>
    </ContainerView>
  );
}

AccessPhotoPage.propTypes = {
  handleTranslateImage: PropTypes.func,
  image_: PropTypes.object,
  handleCropping: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  image_: makeSelectImage(),
});

export function mapDispatchToProps(dispatch) {
  return {
    handleExtactText: (navigation) => {
      const desp = dispatch(extractText());
      console.log("DESP", desp);
      // dispatch()
      navigation.navigate("Display");
    },

    handleCropping: (uri) => {
      ImagePicker.openPicker({
        path: uri,
        width: 300,
        height: 400,
      }).then((image) => {
        console.log(image);
      });
    },

    handleResize: async (uri) => {
      console.log("URIIIII: ", uri);

      const resizedPhoto = await ImageManipulator.manipulateAsync(
        uri,
        [{ resize: { width: 300 } }], // resize to width of 300 and preserve aspect ratio 
        { compress: 0.7, format: 'jpeg' },
       );
        dispatch(savePicture(resizedPhoto));
       console.log("RSSSSSSSSSSSPPPP: ",resizedPhoto);
     
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
