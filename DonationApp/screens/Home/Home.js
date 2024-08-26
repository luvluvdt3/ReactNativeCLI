import React from 'react';
import {Pressable, SafeAreaView, Text} from 'react-native';

import Header from '../../components/Header/Header';

import globalStyle from '../../assets/styles/globalStyle';

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

export default Home;