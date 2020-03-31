import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";

export default function MainPage({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>MAIN PAGE</Text>
      <Text style={styles.textStyle}>Please Choose the service you want to use today!</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate("Option")}
        style={styles.button}
      >
        <Text style={styles.text}>English -> Nepali</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Option")}
        style={styles.button}
      >
        <Text style={styles.text}>Nepali -> English</Text>
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
