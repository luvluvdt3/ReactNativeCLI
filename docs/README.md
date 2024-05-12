# React Native Cli
## Tutorial
https://www.udemy.com/course/react-native-mobile-app-development/

## Setup
https://www.youtube.com/watch?v=gH3l2DSlXDE
https://reactnative.dev/docs/environment-setup

If error https://stackoverflow.com/questions/78384724/react-native-error-java-io-uncheckedioexception-could-not-move-temporary-work -> use gradle 8.5 instead of 8.6 in `AwesomeProject\android\gradle\wrapper\gradle-wrapper.properties`

## First Launch
![alt text](image-1.png)
![alt text](image-2.png)
![alt text](image.png)
(!) Cmd only, not powershell

## What is JSX?
```jsx
import {View, Text} from 'react-native';

function App() {
  // return React.createElement(
  //   View,
  //   null,
  //   React.createElement(Text, null, 'Hello World')
  // ); //without JSX -> complicated unpractical archi
  return ( //with JSX
    <View>
      <Text>Hello World</Text>
    </View>
  );
}
```

## Hello World App
```npx react-native init HWAPP```
```cd HWAPP && npx react-native run-android```
![alt text](image-3.png)
SafeAreaView ensures that the content is displayed within the safe area boundaries of a device. 
