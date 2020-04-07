import React, { useEffect, memo, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  Dimensions
} from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { makeSelectImage } from "../OpenCameraPage/selectors";
import { translateImage } from "./actions";

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

export function AccessPhotoPage({ image_, handleTranslateImage, navigation }) {
  console.log(image_);
  return (
    <View style={{ flex: 1 }}>
      <Image
        source={{ uri: image_.uri }}
        style={{ width: screenWidth, height: screenHeight }}
        resizeMode="contain"
      ></Image>
      <View style={{ position: 'absolute', right: 100, bottom: 50, justifyContent: 'center', alignItems: 'bottom'}}>
        <TouchableOpacity style={styles.button} onPress={() => handleTranslateImage(image_, navigation)}>
          <Text style={styles.text}>Translate Image</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

AccessPhotoPage.propTypes = {
  handleTranslateImage: PropTypes.func,
  image_: PropTypes.object
};

const mapStateToProps = createStructuredSelector({
  image_: makeSelectImage()
});

export function mapDispatchToProps(dispatch) {
  return {
    handleTranslateImage: async (image_, navigation) => {
      const desp = await dispatch(translateImage(image_));
      console.log("DESP", desp);
      navigation.navigate("Display");
    }
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(AccessPhotoPage);

const styles = StyleSheet.create({
  button: {
    marginTop: 15,
    //padding: 5,
    borderRadius: 15,
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255,209,71,0.7)"
  },
  text: {
    color: "palevioletred",
    fontWeight: "700",
    fontSize: 24
  }
});
