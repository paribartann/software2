import React, { useEffect, memo } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { Camera } from "expo-camera";
import * as Permissions from "expo-permissions";

import { openCamera } from "./actions";
import { makeSelectHasPermission, makeSelectType } from "./selectors";
import reducer from "./reducer";

export function OptionPage({
  navigation,
  hasPermission,
  type,
  openCameraFunction
}) {
  console.log(hasPermission);
  console.log(type);

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>
        {" "}
        Okay, you have hosen to translate Engish -> Nepali!{" "}
      </Text>

      <TouchableOpacity
        onPress={() => openCameraFunction(Camera, navigation)}
        style={styles.button}
      >
        <Text style={styles.text}>Open Camera</Text>
      </TouchableOpacity>
    </View>
  );
}

OptionPage.propTypes = {
  hasPermission: PropTypes.bool,
  type: PropTypes.object,
  openCameraFunction: PropTypes.func
};

const mapStateToProps = createStructuredSelector({
  hasPermission: makeSelectHasPermission(),
  type: makeSelectType()
});

export function mapDispatchToProps(dispatch) {
  return {
    openCameraFunction: async (Camera, navigation) => {
      console.log(Camera.Constants.Type.back);
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      console.log("reached here");
      hasPermission_ = status === "granted";
      type = Camera.Constants.Type.back;
      console.log("CLIEN HP : ", hasPermission_);
      console.log("C T : ", type);
      dispatch(openCamera(hasPermission_, type));
      if(hasPermission_) 
      {
        navigation.navigate("Open");
      }
    }
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(OptionPage);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "papayawhip",
    alignItems: "center",
    justifyContent: "center"
  },
  textStyle: {
    fontWeight: "bold",
    fontSize: 24
  },
  button: {
    marginTop: 15,
    //padding: 5,
    borderRadius: 15,
    height: 120,
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255,209,71,0.7)"
  },
  text: {
    color: "palevioletred",
    fontWeight: "700",
    fontSize: 24
  },
  imageBackground: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center"
  }
});
