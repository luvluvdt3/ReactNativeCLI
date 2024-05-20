import React, {useState} from 'react';
import {SafeAreaView, TextInput} from 'react-native';

const App = () => {
  const [textValue, setTextValue] = useState('');
  const [email, setEmail] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  return (
    <SafeAreaView>
      <TextInput
        style={{borderWidth: 1, padding: 10, borderRadius: 4}}
        value={textValue}
        onChangeText={value => setTextValue(value)}
        autoFocus={true}
        placeholder={'Please enter your name'}
      />
      <TextInput
        style={{borderWidth: 1, padding: 10, borderRadius: 4}}
        value={email}
        onChangeText={value => setEmail(value)}
        returnKeyType={'search'} //Also: 'done', 'go', 'next', 'send', 'none', 'previous', 'default', 'emergency-call', 'google', 'join', 'route', 'yahoo'
        keyboardType={'email-address'} //Also: 'numeric', 'phone-pad', 'number-pad', 'decimal-pad', 'visible-password', 'ascii-capable', 'numbers-and-punctuation', 'url', 'name-phone-pad', 'twitter', 'web-search'
        autoFocus={true}
        placeholder={'Please enter your email here'}
      />
      <TextInput
        style={{borderWidth: 1, padding: 10, borderRadius: 4}}
        value={passwordValue}
        onChangeText={value => setPasswordValue(value)}
        keyboardType={'phone-pad'}
        secureTextEntry={true} //This will hide the text to ****
        autoFocus={true}
        placeholder={'Please enter your password'}
      />
    </SafeAreaView>
  );
};