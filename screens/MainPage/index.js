import React, { useEffect, memo } from "react";
import { Alert } from "react-native";
import { ListItem } from "react-native-elements";
import styled from "styled-components";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { Camera } from "expo-camera";
import * as Permissions from "expo-permissions";

import { openCamera } from "./actions";
import { makeSelectHasPermission, makeSelectType } from "./selectors";

export function MainPage({ navigation, openCameraFunction, type }) {

  console.log(typeof type)
  return (
    <ContainerView>
      <TitleView>
        <TitleText>Translation App</TitleText>
        <SubTitleText>translation at your finger tips</SubTitleText>
      </TitleView>

      <StepsView>
        <StepTitleView>
          <StepTitleText>Steps</StepTitleText>
        </StepTitleView>
        <StepListView>
          {stepsList.map((step, i) => (
            <StepsListText key={i}> {step}</StepsListText>
          ))}
        </StepListView>
      </StepsView>

      <ButtonView>
        <Button onPress={() => openCameraFunction(Camera, navigation)}>
          <ButtonText> Open Camera</ButtonText>
        </Button>
      </ButtonView>
    </ContainerView>
  );
}

MainPage.propTypes = {
  hasPermission: PropTypes.bool,
  type: PropTypes.object,
  openCameraFunction: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  hasPermission: makeSelectHasPermission(),
  type: makeSelectType(),
});

export function mapDispatchToProps(dispatch) {
  return {
    openCameraFunction: async (Camera, navigation) => {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);

      hasPermission_ = status === "granted";
      type = Camera.Constants.Type.back;
      console.log("TYPEOF: ", typeof type)
      dispatch(openCamera(hasPermission_, type));
      if (hasPermission_) {
        navigation.navigate("Open");
      }
      else
      {
        Alert.alert("Need permission to move forward!")
      }
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(MainPage);

const ContainerView = styled.View`
  flex: 1;
  background-color: silver;
`;

const TitleView = styled.View`
  flex: 0.5;
  align-items: center;
  justify-content: center;
  background-color: ghostwhite;
  border-radius: 50;
  margin: 10px;
`;

const StepsView = styled.View`
  flex: 3;
  background-color: mintcream;
  border-radius: 50;
  margin: 10px;
  align-items: center;
`;
const ButtonView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const StepTitleView = styled.View`
  flex: 1;
  align-items: center;
`;

const StepListView = styled.View`
  flex: 4;
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

const TitleText = styled.Text`
  font-family: "Times New Roman";
  font-size: 32px;
  margin-top: 5px;
  margin-bottom: 0px;
  text-align: center;
  font-weight: normal;
  color: #222;
`;

const SubTitleText = styled.Text`
  font-family: "Cochin";
  font-size: 14px;
  font-weight: 100;
  font-variant: small-caps;
  text-transform: uppercase;
  color: #777777;
  margin-top: 10px;
  text-align: center !important;
  letter-spacing: 0.3;
`;

const StepTitleText = styled.Text`
  font-family: "Cochin";
  font-size: 32px;
  font-weight: bold;
  font-variant: small-caps;
  color: black;
  margin-top: 10px;
  text-decoration:underline;
`;

const StepsListText = styled.Text`
  color: black;
  font-family: "Times New Roman";
  font-size: 30px;
  padding: 10px;
`;

const stepsList = [
  "1. Take picture / Upload picture from your gallery",
  "2. Extract texts from picture",
  "3. Translate texts to the language of your choice",
  "4. Listen to the translated text",
];
