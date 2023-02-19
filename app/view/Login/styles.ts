import {StyleSheet} from 'react-native';
import {COLORS, Dimension, Fonts, images, Themes} from '../../theme';

export const styles = StyleSheet.create({
  mainLayout: {
    flex: 1,
    backgroundColor: COLORS.white,
    flexDirection: 'column',
  },
  bgImage: {
    flex: 1,
    alignItems: 'center',
    justiyContent: 'center',
  },
  title: {
    color: COLORS.black,
    marginTop: Dimension.h2,
    fontWeight: 'bold',
    ...Fonts.h1,
  },
  innerLayout: {
    flex: 2,
    backgroundColor: COLORS.white,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
  },
  inputTxtTitle: {
    marginTop: 10,
    ...Fonts.h3,
  },
  otherTxt: {
    color: COLORS.black,
    fontSize: 12,
    alignSelf: 'center',
  },
  txtinputSize: {
    height: 50,
    width: '100%',
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray,
  },
  loginText: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: COLORS.white,
    ...Fonts.h3,
  },
  txtLoginWith: {
    alignSelf: 'center',
    marginTop: 10,
    color: COLORS.black,
    ...Fonts.h3,
  },
  button: {
    height: 50,
    width: '100%',
    backgroundColor: COLORS.primary,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  bottomView:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    marginTop:10
  },
  txtSignUpNow:{
      marginLeft:10,
    color:COLORS.primary,
    ...Fonts.h3,
    fontWeight:'bold'
}
});
