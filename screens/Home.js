import React from 'react'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

const Home = ({navigation}) => {
  const goToScan = () => {
    navigation.push("Scan")
  }
  const goToQrcode = () => {
    navigation.push("Qrcode")
  }
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button style={styles.buttonstyle} title="Go to Scan" onPress={goToScan} />
      <Button style={styles.buttonstyle} title="Go to Qrcode" onPress={goToQrcode} />
    </View>
  )
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
    padding: 10,
    width: 300,
    height: 50,
  }
});

export default Home