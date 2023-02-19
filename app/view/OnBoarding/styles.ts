import {StyleSheet} from 'react-native';
import {COLORS,Fonts,images,Themes,Dimension} from '../../theme';

export const styles=StyleSheet.create({
 mainLayout:{
    flex: 1,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
 },
 listmainLayout:{
    width: Dimension.width,
    flex: 1,
 },
 listTitle:{
    justifyContent: 'flex-start',
    marginTop: 40,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 10,
    ...Fonts.largeTitle,
 },
 listSubTitle:{
    justifyContent: 'flex-start',
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 10,
    ...Fonts.h3,
 },
 listImage:{
    width: 400,
    height: 400,
    reszeMode: 'contain',
  },
  bottomMainLayout:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  bottomNextButton:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 50,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    backgroundColor: COLORS.primary,
  },
  buttonFont:{
    color: COLORS.white,
    fontWeight: 'bold',
    ...Fonts.h3,
  },
  bottomGetStartedButton:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 50,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    backgroundColor: COLORS.primary,
  }
});