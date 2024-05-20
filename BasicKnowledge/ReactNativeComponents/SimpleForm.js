import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  TextInput,
  // Button,
  Pressable,
  Text,
  Switch,
  View,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCheck} from '@fortawesome/free-solid-svg-icons';

const App = () => {
  // Declare state variables to hold the email and password values entered by the user
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [shouldKeepLoggedIn, setShouldKeepLoggedIn] = useState(true);
  return (
    <SafeAreaView>
      <ScrollView>
        <TextInput
          value={email}
          keyboardType={'email-address'}
          style={{borderWidth: 1, borderRadius: 4, padding: 10}}
          placeholder={'Please enter your email here'}
          onChangeText={value => {
            setEmail(value);
          }}
        />
        <TextInput
          value={password}
          secureTextEntry={true}
          style={{borderWidth: 1, borderRadius: 4, padding: 10}}
          placeholder={'Please enter your password here'}
          onChangeText={value => {
            setPassword(value);
          }}
        />
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}> 
        {/* View to contain the Switch and Text components so that they can be displayed side by side with flex */}
            <Switch
                value={shouldKeepLoggedIn} 
                onValueChange={value => setShouldKeepLoggedIn(value)} 
            />
          <Text>Keep me logged in</Text>
        </View>
        {/* -- Background Color does not work with button component, therefore we're going to use Pressable
            <Button
              title={'Submit'}
              color={'red'}
              style={{backgroundColor: 'black'}}
            />
            //Also: TouchableOpacity
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
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{color: 'white', textAlign: 'center', padding: 10}}>
              Submit
            </Text>
            <FontAwesomeIcon
              icon={faCheck}
              style={{color: 'white'}}
            />
          </View>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};