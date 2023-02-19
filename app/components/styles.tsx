import {StyleSheet} from 'react-native';
import {COLORS, Dimension, Fonts, images, Themes} from '../theme';

export const styles = StyleSheet.create({
  socialMediaButton: {
    backgroundColor: COLORS.gray,
    height: 50,
    borderRadius: 24,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  bottomView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  textStyle: {
    marginLeft: 20,
    color: COLORS.black,
    ...Fonts.h3,
  },
});
