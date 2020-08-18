import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from '../Pages/Landing';
import ChatScreen from '../Pages/ChatScreen';
import LoginScreen from '../Pages/LoginScreen';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Landing" component={Landing} />
        <Screen name="Chat" component={ChatScreen} />
        <Screen name="Login" component={LoginScreen} />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;