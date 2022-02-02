/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Boss from './components/Boss';

const App = () => {
  return (
      <Boss />
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#333",
    flex: 1
  }
})

export default App;

