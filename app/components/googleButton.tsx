import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {COLORS, Dimension, Fonts, images, Themes} from '../theme';
import {stringConstants} from '../config/stringConstants';
import {styles} from './styles';

const GoogleButton = ({onPress}) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.socialMediaButton}
        onPress={onPress}>
        <Image style={{width: 25, height: 25}} source={images.google}></Image>
        <Text style={styles.textStyle}>Google</Text>
      </TouchableOpacity>
    </View>
  );
};
export default GoogleButton;