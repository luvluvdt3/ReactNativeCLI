import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {getFontFamily} from './assets/fonts/helper';

const App = () => {
  return (
    <SafeAreaView>
      <Text style={{fontSize: 50, fontFamily: getFontFamily('Inter', '200'), color: 'black'}}>
        {/* <Text style={{fontSize: 50, fontFamily: getFontFamily('Inter-ExtraBold')}}> */}
        Hello World!
      </Text>
    </SafeAreaView>
  );
};

export default App;
