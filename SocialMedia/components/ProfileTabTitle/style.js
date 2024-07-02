import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {horizontalScale, scaleFontSize} from '../../assets/styles/scaling';

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

export default style;
