import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../Pages/LoginScreen';
import ChatScreen from '../Pages/ChatScreen';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Login" component={LoginScreen} />
        <Screen name="Chat" component={ChatScreen} />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;