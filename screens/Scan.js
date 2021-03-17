import React from 'react'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import Scanner from '../components/Scanner';

const Scan = () => {
  return <Scanner />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textinput: {
    borderWidth: 1,
    borderColor: 'black',
    width: 300,
    height: 50,
    padding: 10,
    margin: 10
  },
  buttonstyle: {
    marginTop: 30,
  }
});

export default Scan