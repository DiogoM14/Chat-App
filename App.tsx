import React from 'react';
import { StatusBar } from 'expo-status-bar';

import AppStack from './src/Router/AppStack';

export default function App() {
  return (
    <>
      <AppStack />
      <StatusBar style="dark" />
    </>
  );
}


