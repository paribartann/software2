import React, { useEffect, memo, useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  Alert
} from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { Camera } from "expo-camera";
import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons
} from "@expo/vector-icons";
import * as Permissions from "expo-permissions";
import { useDispatch } from 'react-redux';

import { changeCameraType } from "../OptionPage/actions";
import { makeSelectType } from "../OptionPage/selectors";
import { savePicture } from "./actions";
import { resetLoadingText } from "../AccessPhotoPage/actions"
import * as ImagePicker from "expo-image-picker";

export function OpenCameraPage({
  _type_,
  handleCameraView,
  takePicture,
  navigation,
  pickImage
}) {
  const [galleryPermission, setGalleryPermission] = useState(false);
  const camRef = useRef(null);

  getPermissionAsync = async () => {
    if (Platform.OS === "ios") {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        Alert.alert("Sorry, we need camera roll permissions to move forward!");
      } else {
        setGalleryPermission(true);
      }
    }
  };

  const dispatch = useDispatch();

  useEffect( () => {
    dispatch(resetLoadingText());
  })

  useEffect( () => {
    getPermissionAsync();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={_type_} ref={camRef}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            margin: 30
          }}
        >
          <TouchableOpacity
            style={{
              alignSelf: "flex-end",
              alignItems: "center",
              backgroundColor: "transparent"
            }}
            onPress={() => {
              if (galleryPermission) {
                pickImage(navigation);
              }
              else
              {
                Alert.alert("Sorry, we need camera roll permissions to move forward!");
              }
            }}
          >
            <Ionicons
              name="ios-photos"
              style={{ color: "#fff", fontSize: 40 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignSelf: "flex-end",
              alignItems: "center",
              backgroundColor: "transparent"
            }}
            onPress={() => takePicture(camRef, navigation)}
          >
            <FontAwesome
              name="camera"
              style={{ color: "#fff", fontSize: 40 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignSelf: "flex-end",
              alignItems: "center",
              backgroundColor: "transparent"
            }}
            onPress={() => handleCameraView(_type_, Camera)}
          >
            <MaterialCommunityIcons
              name="camera-switch"
              style={{ color: "#fff", fontSize: 40 }}
            />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

OpenCameraPage.propTypes = {
  _type_: PropTypes.object,
  handleCameraView: PropTypes.func,
  takePicture: PropTypes.func,
  image_: PropTypes.object,
  pickImage: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  _type_: makeSelectType()
});

export function mapDispatchToProps(dispatch) {
  return {
    handleCameraView: (type_, Camera) => {
      dispatch(resetLoadingText())
      cam_type_ =
        type_ === Camera.Constants.Type.back
          ? Camera.Constants.Type.front
          : Camera.Constants.Type.back;
      dispatch(changeCameraType(cam_type_));
    },

    takePicture: async (camRef, navigation) => {
      dispatch(resetLoadingText())
      const camera = camRef.current;

      if (camera) {
        let photo = await camera.takePictureAsync();
        console.log(photo);
        dispatch(savePicture(photo));
        console.log("After first dispatch!");
        navigation.navigate("Access");
      }
    },

    pickImage: async (navigation) => {
      dispatch(resetLoadingText())
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images
      });
      dispatch(savePicture(result));
      navigation.navigate("Access");
    }
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(OpenCameraPage);
