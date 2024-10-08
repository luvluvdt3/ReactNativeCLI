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
#### Usage
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

### Drawer Navigator
#### Install
- https://reactnavigation.org/docs/drawer-navigator
  ```
  npm install @react-navigation/drawer
  npm install react-native-gesture-handler react-native-reanimated
  ```
- In `babel.config.js`
  ```jsx
    plugins: ['react-native-reanimated/plugin'],
  ```

#### Usage
```jsx
import {createDrawerNavigator} from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MainMenuNavigation = () => {
  return (
    <Drawer.Navigator screenOptions={{header: () => null, headerShown: false}}>
      <Drawer.Screen name={Routes.Home} component={Home} />
      <Drawer.Screen name={Routes.Profile} component={Profile} />
    </Drawer.Navigator>
  );
};

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{header: () => null, headerShown: false}}
      initialRouteName={Routes.Home}>
      <Stack.Screen name={'Drawer'} component={MainMenuNavigation} />
    </Stack.Navigator>
  );
};
```
*=> Now the Home and Profile screens are in the Drawer Navigator when we slide from the left. (!) Can have the menu button if not using the screenOptions={{header: () => null, headerShown: false}}*
![alt text](image-21.png)
<div style="color: orange;">⚠️If cant slide out the drawer and keep trigger the quitting of the app, try to slide from the veryyyyyy edge of the screen;-; It works i promise</div>

### Tab Navigator (Navigation Without Changing the Screen aka Staying in the Same Screen)
#### Install
- https://reactnavigation.org/docs/material-top-tab-navigator
  ```
  npm install @react-navigation/material-top-tabs react-native-tab-view
  npm install react-native-pager-view
  ```
#### Usage
```jsx
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {View, Text} from 'react-native';

const ProfileTabs = createMaterialTopTabNavigator();

const Tab1 = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>This is tab 1</Text>
    </View>
  );
};

const Tab2 = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>This is tab 2</Text>
    </View>
  );
};

const Tab3 = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>This is tab 3</Text>
    </View>
  );
};

export const ProfileTabsNavigation = () => {
  return (
    <ProfileTabs.Navigator>
      <ProfileTabs.Screen name={'Tab1'} component={Tab1} />
      <ProfileTabs.Screen name={'Tab2'} component={Tab2} />
      <ProfileTabs.Screen name={'Tab3'} component={Tab3} />
    </ProfileTabs.Navigator>
  );
};
```
```jsx
  import {ProfileTabsNavigation} from '../../navigation/MainNavigation';
    <View style={globalStyle.flex}>
      <ProfileTabsNavigation />
    </View>
```
*=> Now we have 3 tabs in the Profile screen with animation when we swipe left or right*
![alt text](image-22.png) 

![alt text](image-23.png)

#### Styling the Tab Navigator
```jsx
import React from 'react';
import {Text} from 'react-native';

import PropTypes from 'prop-types';
import style from './style';
const ProfileTabTitle = props => {
  return (
    <Text style={[style.title, !props.isFocused && style.titleNotFocused]}>
      {props.title}
    </Text>
  );
};

ProfileTabTitle.propTypes = {
  title: PropTypes.string.isRequired,
  isFocused: PropTypes.bool.isRequired,
};

export default ProfileTabTitle;
```
*=> Of course create the style.js file to make it biutiful*
```jsx
const style = StyleSheet.create({
  title: {
    color: '#022150',
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: scaleFontSize(16), //will apply automatically on not focused too
    padding: horizontalScale(15),
  },
  titleNotFocused: {
    color: '#79869F',
    fontFamily: getFontFamily('Inter', '500'), //cant use 400 or anything smaller since there will be missing last letter onFocus. I assume its some hidden styling of Tab Navigator causing it. 
    fontStyle: 'normal',
  },
});
```
<div style="color: orange;">⚠️Personal experience: Avoid using different font size on/off focus, it will cause the last letter to be cut off. Instead, use different color, font style, or padding</div>
<div style="color: orange;">⚠️Also fontWeight doesnt work on windows=w= (Check out helper.js in Donation, its specifically made for Windows </div>

```jsx
        tabBarLabel: ({focused}) => (
          <ProfileTabTitle isFocused={focused} title={'Photos'} />
        ),
```
```jsx
import ProfileTabTitle from '../components/ProfileTabTitle/ProfileTabTitle';

const ProfileTabs = createMaterialTopTabNavigator();
...
const Tab1 = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>This is tab 1</Text>
    </View>
  );
};
  return (
    <ProfileTabs.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {
          backgroundColor: 'transparent',
        },
        tabBarStyle: {
          zIndex: 0,
          elevation: 0,
        },
      }}>
      <ProfileTabs.Screen
        name={'Tab1'}
        options={{
          tabBarLabel: ({focused}) => (
            <ProfileTabTitle isFocused={focused} title={'Photos'} />
          ),
        }}
        component={Tab1}
      />
      ...
    </ProfileTabs.Navigator>
  );
```
*=> Thats how we can style the tab navigator with custom title and indicator. Animation with this is 🤌🤌🤌*
![alt text](image-24.png)

## Donation App
```npx react-native init DonationApp```
```cd "C:\Users\luvluvdt3\Desktop\ReactNativeCLI\DonationApp" && npx react-native run-android```
### Windows Custom Font 
<div style="color: orange;">⚠️Windows doesnt support fontWeight, therefore we have to use custom font helper</div>

```jsx
export const getFontFamily = (baseFont='Inter', weight) => {
    switch(weight) {
        case '100':
            return `${baseFont}-Thin`;
            ...
```
```jsx
import {getFontFamily} from './assets/fonts/helper';
      <Text style={{fontSize: 70, fontFamily: getFontFamily('Inter', '800')}}>
        Hello World!
      </Text>
```

### Install (again) Navigation 
- Same stuff as `## Basic Navigation` && `### Stack Navigator`
  <div style="color: orange;">⚠️Ah remember: If on IOS, dont forget pod install to install the dependencies</div>
  Then close the app and re-run it
  <div style="color: orange;">⚠️If issue, can try</div>
  
  ```npm start -- --reset-cache```

### defaultProps Deprecated
<div style="color: orange;">⚠️There would be warning if using defaultProps, use default value in the function instead</div>

- Before
  ```jsx
  const Button = props => {
    return (
      <Pressable
        disabled={props.isDisabled}
        onPress={() => props.onPress()}>
        ...
      </Pressable>
    );
  };

  Button.defaultProps = {
    isDisabled: false,
    onPress: () => {},
  };
  ```

- After
  ```jsx
    const Button = ({title = '', isDisabled = false, onPress = () => {}})=> {
      return (
        <Pressable
          disabled={isDisabled}
          onPress={onPress}>
          ...
        </Pressable>
      );
    };
  ```
Much cleaner and no warning anymore :v
  
### Redux && Redux Toolkit
- Redux is a state management library, whose main purpose is to manage the state of the application in a predictable way.
  - Advantages:
    - Centralized state management
    - Predictable state management
    - Easy debugging
    - Easy testing
  - Disadvantages:
    - Boilerplate code (meaning a lot of code to write)
    - Complexity
    - Performance issues (since it's centralized, it can be slow)
- Redux Toolkit is a package that helps to reduce the boilerplate code and complexity of Redux. It provides a set of tools and best practices to write Redux code in a more efficient way.
#### Install
- https://redux.js.org/introduction/installation
  ```
  npm install @reduxjs/toolkit
  npm install react-redux
  npm install redux
  ```

### Redux Toolkit Slice
- A slice is a self-contained piece of state and logic for managing that state.
- Slice is a part of the overall state of your application that you want to manage in a modular way.
- Ex in Donation App:
  - User slice keeping information about user (ID, name, email, etc)
  - Categories information for donations
  - Single Donation Information Slice
-> Improve code structure, readability, and maintainability

- Example of User slice:
```jsx
  // Importing the createSlice function from the Redux Toolkit
  import {createSlice} from '@reduxjs/toolkit';

  // Defining the initial state for the user slice of the store
  const initialState = {
    firstName: 'Tu',
    lastName: 'Penguin',
    userId: 1,
  };

  // Creating a new slice of the store named "user" with its own set of reducers
  export const User = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
      // Defining the "updateFirstName" reducer function
      // It takes the current state and an action object as parameters
      // It updates the firstName field of the state with the payload value of the action
      updateFirstName: (state, action) => {
        state.firstName = action.payload.firstName;
      },
    },
  });

  // Exporting the reducers here from the "User" slice
  // makes them available to other parts of the app that want to use it
  export const {updateFirstName} = User.actions;
  export default User;
```

### Combine Reducers
- A Reducer is a function that updates the state of the application in response to an action.
- As the app grows, you may find yourself with many different reducers, each managing its own part of the state.
-> Combine reducers is useful cuz it improves code organization and makes it easier to manage the state of the app.

- In User.js:
  ```jsx
  ...
  export default User.reducer;
  ```
- In store.js:
  ```jsx
  // Importing the combineReducers function from Redux
  import {combineReducers} from 'redux';

  // Importing the configureStore function from the Redux Toolkit
  import {configureStore} from '@reduxjs/toolkit';

  // Importing the User reducer from the ./reducers/User file
  import User from './reducers/User';

  // Creating a rootReducer that combines all reducers in the app

  const rootReducer = combineReducers({
    // Here, we're combining the User reducer and calling it "user"
    user: User,
  });

  // Creating a new Redux store using the configureStore function
  // We're passing in the rootReducer as the main reducer for the store
  const store = configureStore({
    reducer: rootReducer,
  });

  // Exporting the store to be used in the app
  export default store;
  ```
- In App.js:
  ```jsx
  // Importing the Provider component from the React Redux library
  // The Provider component is a higher-order component that provides the Redux store to all components in the app
  import {Provider} from 'react-redux';
  import store from './redux/store';

  const App = () => {
    // Rendering the App component with a Provider and NavigationContainer component
    // We're passing in the store prop to the Provider component, making the store available to all child components
    return (
      <Provider store={store}>
        <NavigationContainer>
          <MainNavigation />
        </NavigationContainer>
      </Provider>
    );
  ```
- In Home.js:
  ```jsx
  // Importing the useSelector hook from the React Redux library
  // This hook allows us to select and retrieve data from the store
  import {useSelector} from 'react-redux';

  const Home = () => {
    // Using the useSelector hook to select the "user" slice of the store
    // This will return the user object containing firstName, lastName and userId fields
    const user = useSelector(state => state.user);
    console.log(user);
    return (
      <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
        <Header title={user.firstName + ' ' + user.lastName} />
      </SafeAreaView>
    );
  };
  ```
  -> Now we can access the user state in the Home screen
    ![alt text](image-25.png)

### Dispatch Actions in Redux
```jsx
import {useDispatch, useSelector} from 'react-redux';

import {updateFirstName} from '../../redux/reducers/User';
const Home = () => {
  const user = useSelector(state => state.user);

  const dispatch = useDispatch();

  console.log(user);

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <Header title={user.firstName + ' ' + user.lastName} />
      {/* onClick dispatch turning firstName to 'Potato' */}
      <Pressable onPress={() => dispatch(updateFirstName({firstName: 'Potato'}))}>
        <Text>Press me to change first name</Text>
      </Pressable>
    </SafeAreaView>
  );
};
```
->onClick dispatch turning firstName to 'Potato' lol
![alt text](image-26.png) ![alt text](image-27.png)

### Redux Logger
```npm install redux-logger```
- In store.js:
  ```jsx
  import logger from 'redux-logger';

  const store = configureStore({
    ...
    middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat(logger);
    },
  });
  ```
-> Onclick the button, the console will log the state changes
![alt text](image-28.png)

### Persisting Store
*With Redux Persist, we can persist the Redux store to the device's storage, so that the state is saved even if the app is closed or the device is restarted.*
*Ex: Earlier we changed the first name to 'Potato', but if we 'R' or close the app and re-open it, the first name will be back to 'Tu'*

- Install
  ```
  npm install redux-persist
  npm install @react-native-async-storage/async-storage
  ```
  Then close everything and re-run the app
  ```
  npm start --reset-cache
  cd "C:\Users\luvluvdt3\Desktop\ReactNativeCLI\DonationApp" && npx react-native run-android
  ```
- In store.js:
  ```jsx
  import AsyncStorage from '@react-native-async-storage/async-storage';
  import {persistReducer, persistStore} from 'redux-persist';
  import {combineReducers, configureStore} from '@reduxjs/toolkit'; //from redux-toolkit instead of redux ->  not using the same config as above

  ...
  // Configuring the redux-persist library to persist the root reducer with AsyncStorage
  const configuration = {
    key: 'root',
    storage: AsyncStorage,
    version: 1,
  };

  // Creating a new persisted reducer with the configuration and root reducer
  const persistedReducer = persistReducer(configuration, rootReducer);

  // Creating a new Redux store using the configureStore function
  // We're passing in the persisted reducer as the main reducer for the store
  const store = configureStore({
    reducer: persistedReducer,

    // Using the getDefaultMiddleware function from the Redux Toolkit to add default middleware to the store
    // We're passing in an object with the serializableCheck key set to false to avoid serialization errors with non-serializable data
    middleware: getDefaultMiddleware => {
      return getDefaultMiddleware({
        serializableCheck: false,
      });
    },
  });

  // Exporting the store to be used in the app
  // Also exporting the persistor object created with the persistStore function from redux-persist
  export default store;
  export const persistor = persistStore(store);
  ```

- In App.js:
  ```jsx
  import {PersistGate} from 'redux-persist/integration/react';
  import {persistor} from './redux/store';

  ...
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <NavigationContainer>
          <MainNavigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
  ```
-> Now the state will be saved even if we close the app and re-open it
![alt text](image-29.png) ![alt text](image-30.png) ![alt text](image-31.png)
Magic 🪄🪄🪄

### Reset Redux Initial State
When we change smth in object's initial state and wanna reset it back:
- In User.js:
  ```jsx
  const initialState = {
    ...
  profileImage: 'https://avatars.githubusercontent.com/u/77581509?v=4',
  };
  export const {resetToInitialState, updateFirstName} = User.actions;
  ```
- In Home.js:
  ```jsx
  import {resetToInitialState} from '../../redux/reducers/User';
  const Home = () => {
    ...
    dispatch(resetToInitialState());
  ```
-> Now the profile image will be back to the initial state, and we should dispatch it only once though lol :v

### Categories of Donations Items
-> Create Redux Slice for Categories and Donation Items
![alt text](image-32.png)

### Firebase Setup
#### Install
  - https://rnfirebase.io/
  - Step 1: Create a Firebase project
  - Step 2: `npm install --save @react-native-firebase/app`
  - Step 3: In android/app/build.gradle, copy `applicationId`
    In this case: 
    `jsx
      defaultConfig {
        applicationId "com.donationapp"
    `
    -> Copy `com.donationapp` 
  - Step 4, go to Firebase Console like `https://console.firebase.google.com/u/0/project/donationapp-XXXX/overview` and click on Android icon
    ![alt text](image-33.png)
  - Step 5, paste the `com.donationapp` to the form
    ![alt text](image-34.png)
  - Step 6, download the `google-services.json` and put it in `android/app/`
    ![alt text](image-35.png)
  - Step 7, skip `Step 3 of Firebase form`
    ![alt text](image-36.png)
  - Step 8, go back to the Firebase Console
    ![alt text](image-37.png)
  - Step 9 `cd android && gradlew signingReport`
  - Step 10: Add into `android/build.gradle`
    ```jsx
    buildscript {
    ...
    dependencies {
        ...
        classpath 'com.google.gms:google-services:4.4.2'
    }
    ```
  - Step 11: Add into `android/app/build.gradle`
    ```jsx
    apply plugin: 'com.google.gms.google-services'
    ```
<div style="color: orange;">⚠️If is on IOS, there are few extra steps still after thi</div>

### Firebase Auth Setup
#### Install
  - https://rnfirebase.io/auth/usage
  - Step 1: `npm install @react-native-firebase/auth --save`
  - Step 2: Go back to Firebase Console and click on `Authentication`
    ![alt text](image-38.png)
  - Step 3: Click on `Get Started`
    ![alt text](image-39.png)
  - Step 4: Click on `Email/Password`
    ![alt text](image-40.png)
  - Step 5: Enable it
    ![alt text](image-41.png)
### Create User on Firebase
- Create `api/user.js`:
  ```jsx
  import auth from '@react-native-firebase/auth';

  export const createUser = async (fullName, email, password) => {
    try {
      const user = await auth().createUserWithEmailAndPassword(email, password);
      await user.user.updateProfile({displayName: fullName});
      console.log(user);
      return user;
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      } else if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid');
      }
      console.log(error);
    }
  };
  ```
  - Calling that api method in `Register.js`:
    ```jsx
    import {createUser} from '../../api/user';
    const Register = ({navigation}) => {
      ...
      <Button
        title={'Registration'}
        onPress={async () => await createUser(fullName, email, password)}
      />
    ```
  - Now we can create a user on Firebase:
  ![alt text](image-42.png)
  ![alt text](image-43.png)
  ![alt text](image-44.png)
<div style="color: cornflowerblue;"><b>Info:</b> Firebase also verify errors like email already in use, invalid email, etc</div>

![alt text](image-45.png)

### Error && Success Handling in Firebase
- In `api/user.js`:
  ```jsx
    catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        return {error: 'The email you entered is already in use.'};
      } else if (error.code === 'auth/invalid-email') {
        return {error: 'Please enter a valid email address.'};
      }
      return {error: 'Something went wrong with your request.'};
    }
  ```
  - In `Register.js`:
    ```jsx
      const [success, setSuccess] = useState('');
      const [error, setError] = useState('');
      ...
      {error.length > 0 && <Text style={style.error}>{error}</Text>}
      {success.length > 0 && <Text style={style.success}>{success}</Text>}
      ...
      <Button
      isDisabled={
        fullName.length <= 2 || email.length <= 5 || password.length < 8
      } //if any of the fields are empty or password is less than 8 characters, the button will be disabled
      title={'Registration'}
      onPress={async () => {
        let user = await createUser(fullName, email, password);
        if (user.error) {
          setError(user.error); //if there is an error, set the error state with the error message
        } else {
          setError('');
          setSuccess('You have successfully registered');
          setTimeout(() => navigation.goBack(), 3000);
        }//if there is no error, set the success state with the success message and navigate back to the previous screen after 3 seconds
      }}
    ```

<div style="color: cornflowerblue;">-> If error then show error message, if success then show success message and navigate to the Home screen</div>

![alt text](image-46.png)
![alt text](image-47.png)

### Navigation Flows (Authenticated or Non-Authenticated)
*Define which screen to show based on the user's authentication status*
- Create `navigation/RootNavigation.js`:
  ```jsx
  const RootNavigation = () => {
    const user = useSelector(state => state.user);
    return user.isLoggedIn ? <Authenticated /> : <NonAuthenticated />;
  };
  ```
- In `navigation/MainNavigation.js`:
  ```jsx
  //Will be used by RootNavigation if user is not logged in
  export const NonAuthenticated = () => {
    return (
      <Stack.Navigator
        initialRouteName={Routes.Login}
        screenOptions={{header: () => null, headerShown: false}}>
        <Stack.Screen name={Routes.Login} component={Login} />
        <Stack.Screen name={Routes.Registration} component={Registration} />
      </Stack.Navigator>
    );
  };

  //Will be used by RootNavigation if user is logged in
  export const Authenticated = () => {
    return (
      <Stack.Navigator
        initialRouteName={Routes.Home}
        screenOptions={{header: () => null, headerShown: false}}>
        <Stack.Screen name={Routes.Home} component={Home} />
        <Stack.Screen
          name={Routes.SingleDonationItem}
          component={SingleDonationItem}
        />
      </Stack.Navigator>
    );
  };
  ```
- In `App.js`:
  ```jsx
  import RootNavigation from './navigation/RootNavigation';
    return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <NavigationContainer>
        <RootNavigation /> //instead of MainNavigation like before
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
  ```
### Log out User
- In `api/user.js`:
  ```jsx
  export const logOut = async () => {
    await auth().signOut();
  };
  ```
- In `screens/Home/Home.js`:
  ```jsx
  import {logOut} from '../../api/user';
  const Home = ({navigation}) => {
    ...
  <Pressable
    onPress={async () => {
      console.log('User is logging out');
      dispatch(resetToInitialState());
      await logOut();
    }}>
    <Header type={2} title={'Logout'} color={'#156CF7'} />
  </Pressable>
  ```
<div style="color: cornflowerblue;">-> Now we can log out the user and reset the state back to the initial state</div>

![alt text](image-48.png)

### Token Expiration using Firebase && AppState
*Token expires every hour, meaning that it's no longer valid for authenticating the user. If the user continues to use the app without logging out, the app will continue to treat the user as authenticated even though their token is no longer valid. And this is very bad because it can lead to very severe security and privacy issues. And additionally, if the user's data is being store on the server, the server may continue to accept the request or server might deny the request. And if we don't log out the user because their tokens are expired, then they're going to be getting bunch of errors.*
<div style="color: cornflowerblue;">-> So what we want to do is make sure that whenever token expires we'll look the user out or we get a refresh token. We want to be getting a refresh token and there's a way to do that using Firebase and we are going to be doing that. </div>
<div style="color: cornflowerblue;">-> We will check the token expiration before making a server request, which is a good practice because we could get a new token if the current one has expired when we're making any server calls.
</div>
<div style="color: cornflowerblue;"><b>Solution-> AppState:</b>  used to track whether the user is running the application in the foreground or in the background. And we can use it to make sure that whenever user comes back from the background or inactive node to the active mode of the app state, then we check the token and make sure that if it needs to be refreshed, we refresh it. </div>

- In `api/user.js`:
  ```jsx
  export const checkToken = async () => {
    try {
      let response = await auth().currentUser.getIdToken(true);
      console.log('We are updating token for you');
      store.dispatch(updateToken(response));
      return response;
    } catch (error) {
      return error;
    }
  };
  ```
- In `redux/reducers/User.js`:
  ```jsx
    updateToken: (state, action) => {
      state.token = action.payload;
    },
  ```
- In `App.js`:
  ```jsx
  import {AppState} from 'react-native';
  ...
  const App = () => {
    const appState = useRef(AppState.currentState);
      useEffect(() => {
        const subscription = AppState.addEventListener(
          'change',
          async nextAppState => {
            if (appState.current.match(/inactive|background/) && nextAppState === 'active') {//we are coming from background to the foreground
              console.log('You have come back into the app');
              await checkToken();
            }
            appState.current = nextAppState;
          },
        );
        checkToken();
        console.log('Application has rendered');
      }, []);
  ```
### Server, NodeJS & Express
```npm install express```
- Create `server.js`:
  ```jsx
  const express = require('express');

  const app = express();

  app.get('/', (req, res) => {
      res.send('Hello World!');
      }
  );

  app.get('/potato', (req, res) => {
      res.send('Hello Potato!');
      }
  );

  const PORT = 3000;
  app.listen(PORT, () => {
      console.log('Server is running on port ' + PORT);
      }
  );
  ```
- Run the server:
  ```node server.js```
  ![alt text](image-49.png)
  ![alt text](image-50.png)
  ![alt text](image-51.png)

### Upgrading Environment with Nodemon and Babbel
- Nodemon:
  *Nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.*
  ```npm install -g nodemon```
  <div style="color: orange;">⚠️WINDOWS: Might have issues with command. Solution: open Powershell as admin and run <i>Set-ExecutionPolicy RemoteSigned -Scope CurrentUser</i> and then run the command again</div>
  <div style="color: orange;">⚠️If still error then run <i>npm install nodemon</i> in the same directory with modifying <i>package.json</i></div>

    ```jsx
    "scripts": {
      "server": "nodemon server.js"
    }
    ```
  <div style="color: cornflowerblue;">Can now run the server with <i>npm run server</i></div>

  ![alt text](image-52.png)

- Babbel:
  *Babel is a JavaScript compiler that allows developers to write code using the latest version of JavaScript and convert it into a version that can run in any browser or environment.*
  ```npm install --save-dev @babel/node @babel/preset-env @babel/runtime @babel/plugin-transform-runtime```
  - Create `.babelrc`:
    ```jsx
    {
      "presets": ["@babel/preset-env"],
      "plugins": ["@babel/plugin-transform-runtime"]
    }
    ```
  - Modify `package.json`:
    ```jsx
    "type":"module",
    ```
  - In `server.js`:
    ```jsx
    //const express = require('express'); //no longer this way
    import express from 'express';
    ```
### Bodyparser & POST, PUT, DELETE Requests
```npm install body-parser```
- In `server.js`:
  ```jsx
  import bodyParser from 'body-parser';

  const app = express();
  app.use(bodyParser.json());
  ```
  ```jsx
  app.get('/user', (req,res) => {
    res.send("You are getting a user data back!");
  })

  app.get('/user', (req,res) => {
      console.log("This is never going to run");
      res.send("You cannot get this response back");
  })

  app.post('/user', (req, res) => {
      console.log(req.body); //console out the json object that we put in the request's body
      res.send("We created a user with firstname of "+req.body.firstName);
  })

  app.delete('/user', (req, res) => {
      console.log(req.body); //console out the json object that we put in the request's body
      res.send("We deleted a user with firstname of "+req.body.firstName);
  })

  app.put('/user', (req, res) => {
      console.log(req.body); 
      res.send("We updated a user with firstname of "+req.body.firstName);
  })
  ```

### Firebase Cloud
*Firebase Cloud Messaging (FCM)'s role is to deliver notifications and messages to users across platforms.*

```npm install -g firebase-tools```
```firebase login```
```firebase init```
![alt text](image-53.png)
![alt text](image-54.png)

(I'm shocked, `tuThePenguin` is already taken ;^;)
![alt text](image-55.png)
![alt text](image-56.png)
![alt text](image-57.png)

<div style="color: cornflowerblue;">-> The Firebase Cloud is now set up</div>

![alt text](image-58.png)
![alt text](image-59.png)
![alt text](image-60.png)

### Transfer Local Settings to Firebase Cloud Functions
 *We can see that the engine node of the Firebase Cloud Functions is 18 (see in the `package.json`), while our node -v is 20 so we need to change the node version using nvm*

- Download exe then install https://github.com/coreybutler/nvm-windows/releases/tag/1.1.12 (idk why but installing the offical guide with curl doens't work for me)

``` nvm install 18``` 

<div style="color: cornflowerblue;"><b>Info:</b> If you have multiple node versions, you can switch between them using `nvm use 20` or `nvm use 18`</div>

*In this case, we need to use node 18 for Firebase Cloud Functions*
```nvm use 18```

Same thing install Babel and Nodemon in the Firebase Cloud Functions
 
Then in `.babelrc`:
```jsx
{
    "presets": [["@babel/preset-env", {
        "targets": {
        "node": "18"
        }
    }]],
    "plugins": ["@babel/plugin-transform-runtime"]
}
```

To deploy run `firebase deploy --only functions` or `npm run deploy` if you have it in `package.json`
Work the same way as the local server but now in the cloud. (I wont be testing it since it requires payment)