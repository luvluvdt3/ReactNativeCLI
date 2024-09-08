import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import style from './style';
import globalStyle from '../../assets/styles/globalStyle';
import PropTypes from 'prop-types';
const Input = ({onChangeText=()=>{}, keyboardType='default', secureTextEntry=false, placeholder, label}) => {
  const [value, setValue] = useState('');
  return (
    <View>
      <Text style={style.label}>{label}</Text>
      <TextInput
        placeholder={placeholder ? placeholder : null}
        style={style.input}
        value={value}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        onChangeText={val => {
          setValue(val);
          onChangeText(val);
        }}
      />
    </View>
  );
};

Input.propTypes = {
  keyboardType: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string.isRequired,
  onChangeText: PropTypes.func,
  secureTextEntry: PropTypes.bool,
};

export default Input;