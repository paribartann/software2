import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";

export default function LandingPage({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Welcome to the Translation App</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate("Main")}
        style={styles.button}
      >
        <Text style={styles.text}>Main Menu</Text>
      </TouchableOpacity>

    </View>
  );
}



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
  //Big button styles
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
