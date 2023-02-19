import {StyleSheet} from 'react-native';
import { COLORS,Fonts } from '../../theme';

export const styles=StyleSheet.create({
    mainView:{
        flex: 1,
        backgroundColor: COLORS.white,
      },
    backButtonBackground:{
        width: 60,
        height: 60,
        borderRadius: 30,
        marginLeft: 10,
        backgroundColor: COLORS.gray,
        alignItems: 'center',
        justifyContent: 'center',
      },
      backArrow:{
        height: 15,
        width: 30,
      },
      headerTitle:{
        color: COLORS.black,
        marginLeft: 10,
        marginTop: 20,
        fontWeight: 'bold',
        ...Fonts.h1,
      },
      listItemBG:{
        flex: 1 / 3,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.additionalColor13,
        borderRadius: 4,
        width: 100,
        height: 120,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
      },
      listImage:{
        height: 30,
        width: 30,
        tintColor: COLORS.black,
      },
      listText:{
        ...Fonts.h4,
        fontWeight: 'bold',
        color: COLORS.black,
      },
      buttonBg:{
        backgroundColor: COLORS.primary,
        marginBottom: 10,
        height: 60,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
      },
      buttonText:{
        color: COLORS.white,
        fontWeight: 'bold',
        ...Fonts.h3,
      }


})