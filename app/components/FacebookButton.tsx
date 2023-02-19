import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {COLORS, Dimension, Fonts, images, Themes} from '../theme';
import {stringConstants} from '../config/stringConstants';
import {styles} from './styles';

const FaceBookButton = ({onPress}) => {
  return (
      <TouchableOpacity
        style={styles.socialMediaButton}
        onPress={onPress}>
        <Image style={{width: 10, height: 25}} source={images.facebook}></Image>
        <Text style={styles.textStyle}>facebook</Text>
      </TouchableOpacity>
  );
};
export default FaceBookButton;
