import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  StatusBar,
  TextInput,
  ScrollView,
} from 'react-native';
import {styles} from './styles';
import {COLORS, Dimension, Fonts, images, Themes} from '../../theme';
import {stringConstants} from '../../config/stringConstants';
import FaceBookButton from '../../components/FacebookButton';
import GoogleButton from '../../components/googleButton';

const LoginView = ({navigation,
  userName,
  pass,
  userNameFailureMessage,
  passFailureMessage,
  hideShowPass,
  getUserName,
  getPassword,
  updateNameErrorMessage,
  updateHideShowPass,
  onClickSignUpButton
}) => {
  function updateErrorMessage() {
    updateNameErrorMessage();
  }

  return (
    <View style={styles.mainLayout}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.kellyGreen} />
      <View style={styles.mainLayout}>
        <ImageBackground
          style={styles.bgImage}
          resizeMode="cover"
          source={images.bg}>
          <Text style={styles.title}>{stringConstants.login}</Text>
        </ImageBackground>
      </View>

      <View style={styles.innerLayout}>
        <Text style={styles.inputTxtTitle}>
          {stringConstants.userNameandEmail}
        </Text>
        <TextInput
          style={styles.txtinputSize}
          onChangeText={value => getUserName(value)}
        />
        <View style={styles.divider}></View>
        <Text>{userNameFailureMessage}</Text>
        <Text style={styles.inputTxtTitle}>{stringConstants.pass}</Text>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1.8, justifyContent: 'center'}}>
            <TextInput
              style={styles.txtinputSize}
              secureTextEntry={hideShowPass ? false : true}
              onChangeText={value => getPassword(value)}
            />
          </View>
          <View style={{flex: 0.2, justifyContent: 'center'}}>
            <TouchableOpacity onPress={() => updateHideShowPass()}>
              <Image
                style={{height: 20, width: 20}}
                source={hideShowPass ? images.eye : images.eye_close}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.divider}></View>
        <Text>{passFailureMessage}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => updateErrorMessage()}>
          <Text style={styles.loginText}>{stringConstants.login}</Text>
        </TouchableOpacity>

        <Text style={styles.txtLoginWith}>{stringConstants.orLoginWith}</Text>

        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <GoogleButton onPress={() => console.log('Google Button')} />
          </View>
          <View style={{flex: 1}}>
            <FaceBookButton onPress={() => console.log('FaceBook Button')} />
          </View>
        </View>

        <View style={styles.bottomView}>
          <Text>{stringConstants.newUser}</Text>
          <TouchableOpacity onPress={()=>onClickSignUpButton()}>
          <Text style={styles.txtSignUpNow}>{stringConstants.signUpNow}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginView;
