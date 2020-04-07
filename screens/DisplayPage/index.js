import React, { memo } from "react";
import { StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import * as Progress from 'react-native-progress';

import {
  makeSelectLoading,
  makeSelectText
} from "../AccessPhotoPage/selectors";



export function DisplayPage({ loading, text }) {

  let ComponentToRender;

  if (!loading) {
    
    ComponentToRender = <Progress.CircleSnail color={['red', 'green', 'blue']} size={100}/>
                        
  } else {
  
     ComponentToRender =  <Text style={styles.translatedTextStyle}> {text}</Text>
    
  }

  // if (!loading) {
  //   return(
  //   <View style={styles.container}>
  //       <Progress.CircleSnail color={['red', 'green', 'blue']} size={100}/>
  //   </View>
  //   );
  // } else {
  //   return (
  //     <View style={styles.container}>
  //       <Text style={styles.textStyle}>{text}</Text>
  //     </View>
  //   );
  // }

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Translated Text: </Text>
      {ComponentToRender}
    </View>
  )
}
DisplayPage.propTypes = {
  loading: PropTypes.bool,
  text: PropTypes.string
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  text: makeSelectText()
});

export function mapDispatchToProps(dispatch) {
  return {};
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(DisplayPage);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "papayawhip",
    alignItems: "center",
  },
  textStyle: {
    fontWeight: "bold",
    fontSize: 24
  },
  translatedTextStyle: {
    fontWeight: "bold",
    fontSize: 20,
    alignItems: "center"
  }
});
