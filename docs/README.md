# React Native Cli
## Tutorial
https://www.udemy.com/course/react-native-mobile-app-development/

## Common errors
<div style="color: orange;">⚠️Cmd only, not powershell</div>

<div style="color: orange; ">⚠️If error https://stackoverflow.com/questions/78384724/react-native-error-java-io-uncheckedioexception-could-not-move-temporary-work -> use gradle 8.5 instead of 8.6 in <i>AwesomeProject\android\gradle\wrapper\gradle-wrapper.properties</i> </div>

<div style="color: orange; ">⚠️If syntax error in .js "Parsing error: No Babel config file detected for", in .eslintrc.js, add: </div>

```jsx
  plugins: [
    "babel", // fix error "Parsing error: Unexpected token"
    "html",
  ]
``` 


## Setup
https://www.youtube.com/watch?v=gH3l2DSlXDE
https://reactnative.dev/docs/environment-setup


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

## React Hooks
- useState: same old `var1,setVar1 = useState(initVal)`
Some new stuff that i havent noticed before
- If useEffect on a variable var1:
  - If setVar1(newVal) is called, but newVal == var1, then useEffect will not be called 
  - At init, useEffect will be called too since var1 is initialized, which makes sense that [] is called at init even with empty dependency

- Does have useRef like Vue.js too

- useContext omgg like a globally accessible variable without passing props to 999 child of child of child components 

## Basic Components
- Image https://reactnative.dev/docs/image
```jsx
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
```

-  TextInput https://reactnative.dev/docs/textinput
```jsx
  const [email, setEmail] = useState('');
  return (
      <TextInput
        style={{borderWidth: 1, padding: 10, borderRadius: 4}}
        value={email}
        onChangeText={value => setEmail(value)}
        returnKeyType={'search'} //Also: 'done', 'go', 'next', 'send', 'none', 'previous', 'default', 'emergency-call', 'google', 'join', 'route', 'yahoo'
        keyboardType={'email-address'} //Also: 'numeric', 'phone-pad', 'number-pad', 'decimal-pad', 'visible-password', 'ascii-capable', 'numbers-and-punctuation', 'url', 'name-phone-pad', 'twitter', 'web-search'
        autoFocus={true}
        placeholder={'Please enter your email here'}
      />
  );
```

- ScrollView https://reactnative.dev/docs/scrollview
```jsx
      <ScrollView
        onScroll={() => console.log('We are now scrolling')}
        contentContainerStyle={{backgroundColor: 'red', height: 600}}
        vertical={true} 
        showsVerticalScrollIndicator={false}
        horizontal={true} 
        showsHorizontalScrollIndicator={false}>
        {/* Content here */}
      </ScrollView>
```

- Simple Form with Button/Pressable
```jsx
        <TextInput
          {/* blah blah */}
        />
        <TextInput
          {/* blah blah */}
        />
        {/* -- Background Color does not work with button component, therefore we're going to use Pressable
            <Button
              title={'Submit'}
              color={'red'}
              style={{backgroundColor: 'black'}}
            />
        */}
        <Pressable
          // Set opacity to 0.5 if either email or password is missing or the password is less than 8 characters
          style={[
            {backgroundColor: 'black'},
            (email.length === 0 || password.length < 8) && {opacity: 0.5},
          ]}
          // Disable the Pressable if either email or password is missing or the password is less than 8 characters
          disabled={email.length === 0 || password.length < 8}
          onPress={() => {
            console.log('clicked');
            console.log(email, password);
          }}>
          <Text style={{color: 'white', textAlign: 'center', padding: 10}}>
            Submit
          </Text>
        </Pressable>
```
- Switch https://reactnative.dev/docs/switch
```jsx
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}> 
        {/* View to contain the Switch and Text components so that they can be displayed side by side with flex */}
            <Switch
                value={shouldKeepLoggedIn} 
                onValueChange={value => setShouldKeepLoggedIn(value)} 
            />
          <Text>Keep me logged in</Text>
        </View>
```
- Font Awesome https://docs.fontawesome.com/web/use-with/react-native
```
npm i --save @fortawesome/react-native-fontawesome @fortawesome/fontawesome-svg-core react-native-svg
```
```
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/free-brands-svg-icons
npm i --save @fortawesome/free-regular-svg-icons
```
```jsx
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCheck} from '@fortawesome/free-solid-svg-icons';
      <FontAwesomeIcon
        icon={faCheck}
        style={{color: 'white'}}
      />
```

## Project SocialMedia
```npx react-native init SocialMedia```
```cd "C:\Users\luvluvdt3\Desktop\ReactNativeCLI\SocialMedia" && npx react-native run-android```
(!) Remember to change gradle to gradle-8.5

#### Download fonts https://github.com/nvacheishvili/SocialMedia/compare/installing-custom-fonts?expand=1
  - Download it
    https://fonts.google.com/specimen/Inter?query=inter ![alt text](image-4.png)
  - Install
    ![alt text](image-5.png)
  - Create react-native.config.js
    ```jsx
    module.exports = {
      project: {
        ios: {},
        android: {},
      },
      assets: ['./assets/fonts'],
    };
    ```
  - Copy/paste fonts in new folder `assets/fonts` ![alt text](image-6.png)
  - Run `npx react-native-asset` to link the fonts thanks to react-native.config.js ![alt text](image-7.png)
    -> Will see the copies of fonts in `android/app/src/main/assets/fonts` and `ios/SocialMedia/Info.plist`
  - Re-run the app ```cd "C:\Users\luvluvdt3\Desktop\ReactNativeCLI\SocialMedia" && npx react-native run-android```
  - Now can use it
  ```jsx
      <Text style={{fontSize: 50, fontFamily: getFontFamily('Inter-ExtraBold')}}>
        Hello World!
      </Text>
  ``` 
  ![alt text](image-8.png)
  - Or use a helper to replace font name (Inter-ExtraBold, Inter-Bold, Inter-Regular, Inter-Light,...) with numbers that will take care of default cases between ios and android to always choose Regular font as default
  ```jsx
  export const getFontFamily = (baseFont = 'Inter', weight) => {
    switch (weight) {
      case '100':
        return `${baseFont}-Thin`;
      case '200':
        return `${baseFont}-ExtraLight`;
      case '300':
        return `${baseFont}-Light`;
        ...
      default:
        return `${baseFont}-Regular`;
    }
  };
  ```
  ```jsx
  import {getFontFamily} from './assets/fonts/helper';
      <Text style={{fontSize: 50, fontFamily: getFontFamily('Inter', '800')}}>
        Hello World!
      </Text>
  ```
#### Create Title Component
- Create folder `/components/Title/` with `Title.js` and `styles.js`
- Install PropsTypes `npm i prop-types --save` to check the type of props passed to the component
```jsx
  const Title = props => {
    return <Text style={style.title}>{props.title}</Text>;
  };
  Title.propTypes = {
    title: PropTypes.string.isRequired,
  };
```
```jsx
const style = StyleSheet.create({
  title: {
    color: '#022150',
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: 24,
  },
});
```
- In `App.js`
```jsx
  <Title title={'Let’s Explore'} />
```

#### Install FontAwesome
https://docs.fontawesome.com/web/use-with/react-native
```
npm i --save @fortawesome/react-native-fontawesome @fortawesome/fontawesome-svg-core react-native-svg
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/free-brands-svg-icons
npm i --save @fortawesome/free-regular-svg-icons
```
(!) Remember to restart the app after installing FontAwesome
```jsx
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
  <FontAwesomeIcon icon={faEnvelope} size={20} color={'#898DAE'} />
```
![alt text](image-9.png)

- Color picker not showing in .js: https://stackoverflow.com/questions/71472632/styled-components-color-picker-not-showing 
 #### Done SocialMedia
![alt text](image-10.png)

## Responsive UI
#### Dimensions
```jsx
import {Dimensions} from 'react-native';

const [screenData, setScreenData] = useState(Dimensions.get('screen'));

console.log(screenData);
Dimensions.addEventListener('change', result => {
  setScreenData(result.screen);
});
return(
  <SafeAreaView>
    <View
    style={{
      backgroundColor: 'red',
      width: screenData.width / 2,
      height: screenData.height / 2,
    }}>
    <Text style={{fontSize: screenData.height / 20}}>
      This box will have half of the screens width and height
    </Text>
  </View>
  </SafeAreaView>
)
```
#### Scaling
Use `Dimensions` to get the screen width and height, then use it to scale the components -> responsive UI
```
npm install --save react-native-device-info
```
```jsx
import {Dimensions} from 'react-native';
import DeviceInfo from 'react-native-device-info';

const {width, height} = Dimensions.get('window');
const isSmall = width <= 375 && !DeviceInfo.hasNotch();

const guidelineBaseWidth = () => {
  if (isSmall) {
    return 330;
  }
  return 350;
};

const horizontalScale = size => (width / guidelineBaseWidth()) * size;

const guidelineBaseHeight = () => {
  if (isSmall) {
    return 550;
  } else if (width > 410) {
    return 620;
  }
  return 680;
};

const verticalScale = size => (height / guidelineBaseHeight()) * size;

const guidelineBaseFonts = () => {
  if (width > 410) {
    return 430;
  }
  return 400;
};
const scaleFontSize = size => Math.round((width / guidelineBaseFonts()) * size);
export {horizontalScale, verticalScale, scaleFontSize};
```
#### Platform Specific Code (Android/iOS)
```jsx
import {Platform, Switch} from 'react-native';
  const [isOn, setIsOn] = useState(false);
  console.log(Platform); // {"OS": "android", "Version": 34, "__constants": {"Brand": "google", "Fingerprint": "google/sdk_gphone64_...}
  <View
    style={{
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-start',
    }}>
    <Switch
      value={isOn}
      style={
        Platform.OS === 'android' && {
          transform: [{scaleX: 1.5}, {scaleY: 1.5}],
        }
      }
      ios_backgroundColor={'#000'} // Only for iOS, since we cant change the trackColor
      trackColor={
        Platform.OS === 'android' && {
          false: 'grey',
          true: 'red',
        }
      }
      onValueChange={value => setIsOn(value)}
    />
  </View>
```
=> Android: Switch is bigger, trackColor is red, iOS: Switch is smaller, trackColor is grey
![alt text](image-11.png) ![alt text](image-12.png)
#### Status Bar of Android/iOS
```jsx
import {StatusBar} from 'react-native';
   <StatusBar backgroundColor={'#8510eb'} barStyle={'light-content'} /> 
      {/* Also dark-content, default */}
      {/* Background color will not work on IOS, since its transparent by default */}
```
- Android:
  - light-content: 
    ![alt text](image-13.png)
  - dark-content:
    ![alt text](image-14.png)
- iOS:
  - light-content: (lol not reccomended)
    ![alt text](image-15.png)
  - dark-content: (same as default)
    ![alt text](image-16.png)

## Basic Navigation
### Install
  - https://reactnavigation.org/docs/getting-started
    ```
    npm install @react-navigation/native
    npm install react-native-screens react-native-safe-area-context
    ```
  - In android/app/src/main/java/<your package name>/MainActivity.kt
    ```kotlin
    import android.os.Bundle;
    ...
    override fun onCreate(savedInstanceState: Bundle?) {
      super.onCreate(null)
    }
    ```
  - Wrap the App in NavigationContainer
    ```jsx
    import {NavigationContainer} from '@react-navigation/native';
    <NavigationContainer>
      <SafeAreaView>
        ...
      </SafeAreaView>
    </NavigationContainer>
    ```
  - <div style="color: orange;">⚠️ If error <i>A problem occurred configuring project ':react-native-screens'. > [CXX1101] NDK at C:\Users\luvluvdt3\AppData\Local\Android\Sdk\ndk\26.1.10909125 did not have a source.properties file </i> https://stackoverflow.com/questions/78391354/react-native-a-problem-occurred-configuring-project-react-native-screens
    --> Install the missing ndkVersion ![alt text](image-18.png) </div>
  ![alt text](image-17.png)
  ![alt text](image-19.png)
  
### Stack Navigator
#### Install
- https://reactnavigation.org/docs/stack-navigator
  ```
  npm install @react-navigation/stack
  npm install react-native-gesture-handler
  npm install @react-native-masked-view/masked-view
  ```
- Add to index.js
  ```jsx
  import 'react-native-gesture-handler';
  ```
```jsx
export const Routes = {
    Home: 'Home',
  };
```
```jsx
import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './Routes';
import Home from '../screens/Home/Home';

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{header: () => null, headerShown: false}} //have to put this or else the ugly 'Home' header will show up
      initialRouteName={Routes.Home}> //this is the first screen that will show up
      <Stack.Screen name={Routes.Home} component={Home} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
```
```jsx
import MainNavigation from './navigation/MainNavigation';
const App = () => {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
};

export default App;
```
```jsx
import {Routes} from '../../navigation/Routes';
const Home = ({navigation}) => {
  ...
                  <TouchableOpacity
                  style={style.messageIcon}
                  onPress={() => {
                    navigation.navigate(Routes.Profile);
                  }}>
```
*=> On press the message icon, navigate to Profile screen*
```jsx
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={{color: 'blue'}}>Go Back</Text>
      </TouchableOpacity>
```
![alt text](image-20.png)
*=> On press the 'Go Back' text, navigate back to the previous screen*

<div style="color: orange;">⚠️If error, make sure that Routes are well imported. Aka copy-paste sometimes doesnt count, gotta type it out and choose from the suggestion example <i style="color: red;">Routes.Profile</i> </div>
