import React, { useEffect, memo } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import styled from "styled-components";

export default function AboutPage({}) {
  return (
    <ContainerView>
      <TitleView>
        <TitleText>Translation App</TitleText>
        <SubTitleText>translation at your finger tips</SubTitleText>
      </TitleView>

      <AboutView>
        <AboutTitleView>
          <AboutTitleText>About</AboutTitleText>
        </AboutTitleView>
        <AboutContentView></AboutContentView>
      </AboutView>

      <FooterView>
      <FooterText>{'\u00A9'} Translation App Team</FooterText>
      </FooterView>
    </ContainerView>
  );
}

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

const AboutView = styled.View`
  flex: 3;
  background-color: mintcream;
  border-radius: 50;
  margin: 10px;
  align-items: center;
`;

const AboutTitleView = styled.View`
  flex: 1;
  align-items: center;
`;

const AboutContentView = styled.View`
  flex: 3;
`;

const FooterView = styled.View`
  flex: 0.5;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  flex-direction: row;
  flex-wrap: wrap;
`;

const AboutTitleText = styled.Text`
  font-family: "Cochin";
  font-size: 28px;
  font-weight: bold;
  font-variant: small-caps;
  color: black;
  margin-top: 10px;
  text-decoration: underline;
`;

const FooterText = styled.Text`
  font-size: 20;
  font-family: "Cochin";
  padding: 10px;
`;
