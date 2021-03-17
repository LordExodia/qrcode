/*
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [user, setUser] = useState('Kelvin');
  const pressHandler = () => {
    setUser('Juan')
  }
  return (
    <View style={styles.container}>
      <Text>{user}!</Text>
      <TextInput style={styles.textinput}
        placeholder="Enter the username"
        onChangeText={setUser}
      />
      <View style={styles.buttonstyle}>
        <Button title="Change" 
          onPress={pressHandler}
        />
        </View>
      <StatusBar style="auto" />
    </View>
  );
}
*/

import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import Scanner from './components/Scanner';
import Generator from './components/Generator';
import MyStack from './routes/MyStack';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  //return <Generator />  //<Scanner />
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
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
