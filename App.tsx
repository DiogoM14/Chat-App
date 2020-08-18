import React from 'react';
import { StatusBar } from 'expo-status-bar';
import ChatScreen from './src/Pages/ChatScreen';


export default function App() {
  return (
    <>
      <ChatScreen />
      <StatusBar style="dark" />
    </>
  );
}


