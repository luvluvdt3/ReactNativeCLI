import React from 'react';
import {Button, SafeAreaView, Text} from 'react-native';
import useToggle from './useToggle'; // Import the custom hook

const App = () => {
  const [isOn, toggleIsOn] = useToggle(false); // aka value state & toggle function in useToggle.js

  return (
    <SafeAreaView>
      <Text>{isOn ? 'ON' : 'OFF'}</Text>{' '}
      <Button title={'Toggle'} onPress={toggleIsOn} />{' '}
    </SafeAreaView>
  );
};