import React from "react";
import {
  StyleSheet,
  Text,
  View
} from "react-native";

export default function AccessCameraPage({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>ACCESS CAMERA PAGE</Text>
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
  }
});
