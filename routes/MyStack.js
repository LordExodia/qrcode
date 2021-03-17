import React from 'react'
import Home from '../screens/Home'
import Scan from '../screens/Scan'
import Qrcode from '../screens/Qrcode'
import {createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Scan" component={Scan} />
      <Stack.Screen name="Qrcode" component={Qrcode} />
    </Stack.Navigator>
  )
}

export default MyStack
