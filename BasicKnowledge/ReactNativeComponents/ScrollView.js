import React from 'react';
import {SafeAreaView, ScrollView, Image} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView
        onScroll={() => console.log('We are now scrolling')}
        contentContainerStyle={{backgroundColor: 'red', height: 600}}
        vertical={true} 
        showsVerticalScrollIndicator={false}
        horizontal={true} 
        showsHorizontalScrollIndicator={false}>
        <Image
          source={require('./assets/images/cake.png')}
          style={{height: 500, width: 500}}
        />
        <Image
          source={require('./assets/images/cake.png')}
          style={{height: 500, width: 500}}
        />
        <Image
          source={require('./assets/images/cake.png')}
          style={{height: 500, width: 500}}
        />
      </ScrollView>
    </SafeAreaView>
  );
};