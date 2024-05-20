import React, {useState} from 'react';
import {SafeAreaView, Image} from 'react-native';

const App = () => {
  const [imageSource, setImageSource] = useState({uri: 'http://example.com'});
  return (
    <SafeAreaView>
      <Image
        source={imageSource}
        style={{width: '100%', height: '100%', backgroundColor: 'red'}}
        resizeMode={'center'} // Also: 'cover', 'contain', 'stretch', 'repeat'
        // If there is an error loading the image, log an error message and set the image source to a local image
        onError={() => {
          console.log('Error has been detected while loading an image');
          setImageSource(require('./assets/images/cake.png'));
        }}
      />
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1089&q=80',
        }}
        style={{width: 100, height: 100}}
      />
    </SafeAreaView>
  );
};