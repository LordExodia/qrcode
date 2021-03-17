import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, TextInput } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

// Simple usage, defaults for all but the value
export default function App() {
  const [mensaje, setMensaje] = useState('Acuarela QR Code');
  return (
    <View style={styles.container}>
      <TextInput style={styles.textinput}
        placeholder="QR Code Message"
        onChangeText={setMensaje}
      />
      <QRCode
        value={`${mensaje}!`}
      />
    </View>
  );
};

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