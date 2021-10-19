import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Box = (props) => {
  return (
    <View style={styles.container}>
      <Text>{props.title}</Text>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
    borderColor: 'black',
    borderRadius: 30,
    backgroundColor: 'grey',
  },
});

export default Box;
