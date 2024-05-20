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