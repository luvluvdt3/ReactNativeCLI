import React from 'react';

import style from './style';
import {Image, View, ScrollView} from 'react-native';

const ProfileTabContent = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={style.profileTabContentContainer}>
      <View style={style.profileTabContent}>
        <Image
          resizeMode={'contain'}
          style={style.image}
          source={require('../../assets/images/post1.png')}
        />
        <Image
          resizeMode={'contain'}
          style={style.image}
          source={require('../../assets/images/post1.png')}
        />
        <Image
          resizeMode={'contain'}
          style={style.image}
          source={require('../../assets/images/post1.png')}
        />
        <Image
          resizeMode={'contain'}
          style={style.image}
          source={require('../../assets/images/post1.png')}
        />
        <Image
          resizeMode={'contain'}
          style={style.image}
          source={require('../../assets/images/post1.png')}
        />
        <Image
          resizeMode={'contain'}
          style={style.image}
          source={require('../../assets/images/post1.png')}
        />
        <Image
          resizeMode={'contain'}
          style={style.image}
          source={require('../../assets/images/post1.png')}
        />
        <Image
          resizeMode={'contain'}
          style={style.image}
          source={require('../../assets/images/post1.png')}
        />
        <Image
          resizeMode={'contain'}
          style={style.image}
          source={require('../../assets/images/post1.png')}
        />
        <Image
          resizeMode={'contain'}
          style={style.image}
          source={require('../../assets/images/post1.png')}
        />
      </View>
    </ScrollView>
  );
};

export default ProfileTabContent;