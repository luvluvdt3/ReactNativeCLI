import React from 'react';
import {SafeAreaView} from 'react-native';

import Header from '../../components/Header/Header';

import globalStyle from '../../assets/styles/globalStyle';

import {useSelector} from 'react-redux';

const Home = () => {
  const user = useSelector(state => state.user);
  console.log(user);
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <Header title={user.firstName + ' ' + user.lastName} />
    </SafeAreaView>
  );
};

export default Home;