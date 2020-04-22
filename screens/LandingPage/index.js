import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";

import styled from "styled-components";
import logo from "../../files/images/logo2.png";

export default function LandingPage({ navigation }) {
  return (
    <ContainerView>
      <LogoView>
        <Logo source={logo} />
      </LogoView>

      <ButtonView>
        <Button onPress={() => navigation.navigate("Main")}>
          <ButtonText> Start</ButtonText>
        </Button>
      </ButtonView>

      <FooterView>
        <AboutText onPress={() => navigation.navigate("About")}>About</AboutText>
        <FooterText>version 1.0</FooterText>
      </FooterView>
    </ContainerView>
  );
}

const ContainerView = styled.View`
  flex: 1;
  background-color: silver;
`;

const FooterView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Logo = styled.Image`
  width: 250;
  height: 250;
  border-radius: 100;
  border-width: 4;
  border-color: white;
  padding-top: 10px;
`;

const LogoView = styled.View`
  flex: 3;
  align-items: center;
  padding: 10px;
  margin: 5px;
  justify-content: center;
`;

const ButtonView = styled.View`
  flex: 2;
  align-items: center;
  padding: 10px;
  margin: 5px;
`;

const Button = styled.TouchableOpacity`
  margin-top: 15;
  border-radius: 15;
  height: 120;
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

const FooterText = styled.Text`
  font-size: 20;
  font-family: "Cochin";
  padding: 10px;
`;

const AboutText = styled.Text`
  font-size: 20;
  font-family: "Cochin";
  color: blue;
  padding: 10px;
`;
