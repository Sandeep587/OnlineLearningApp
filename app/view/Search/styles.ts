import {StyleSheet} from 'react-native';
import {COLORS, Dimension, Fonts, images, Themes} from '../../theme';

export const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginLeft: 10,
    marginRight: 10,
  },
  bgSearch: {
    flexDirection: 'row',
    height: 40,
    backgroundColor: COLORS.white,
    borderRadius: 6,
    marginTop: 10,
    borderWidth: 1,
    borderColor: COLORS.gray20,
  },
  searchIconStyle: {
    justifyContent: 'center',
    width: 45,
    marginLeft: 10,
  },
  searchIconDim: {
    height: 20,
    width: 20,
    tintColor: COLORS.gray30,
  },
  titleTopSearch: {
    ...Fonts.h2,
    color: COLORS.black,
    fontWeight: 'bold',
    marginTop: 10,
  },
  topSearchTxtStyle: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
    marginRight: 10,
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: COLORS.gray,
  },
  catListMainView: {
    marginRight: 10,
    marginTop: 10,
    borderRadius: 5,
  },
  catListBgImage: {
    height: 180,
    width: 180,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  lableTopSearch: {
    alignSelf: 'center',
    color: COLORS.gray50,
    fontWeight: 'bold',
    ...Fonts.h3,
  },
  catListTxt:{
    alignSelf: 'center',
    justifyContent:'center',
    color: COLORS.white,
    fontWeight: 'bold',
    ...Fonts.h2,
  }
});
