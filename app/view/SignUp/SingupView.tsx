import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import {styles} from './styles';
import {COLORS, Dimension, Fonts, images, Themes} from '../../theme';
import {stringConstants} from '../../config/stringConstants';
import FaceBookButton from '../../components/FacebookButton';
import GoogleButton from '../../components/googleButton';

const SignupView = ({
  isStudentChecked,
  isTutorChecked,
  updateCheckedStatus,
  userName,
  pass,
  userNameFailureMessage,
  passFailureMessage,
  hideShowPass,
  getUserName,
  getPassword,
  getUserEmail,
  updateNameErrorMessage,
  updateHideShowPass,
  userEmailFailureMessage,
  onClickLoginButton
}) => {
  function updateErrorMessage() {
    updateNameErrorMessage();
  }
  return (
    <ScrollView>
      <View style={styles.mainLayout}>
        <Text style={styles.title}>{stringConstants.register}</Text>
        <View style={styles.registerType}>
          <View
            style={{
              flex: 1,
            }}>
            <TouchableOpacity
              onPress={() => updateCheckedStatus()}
              style={{
                flex: 1,
                backgroundColor: isStudentChecked ? COLORS.black : COLORS.gray,
                marginLeft: 10,
                marginRight: 5,
                borderRadius: 10,
              }}>
              <View style={styles.circle}>
                <Image
                  style={{
                    height: 20,
                    width: 20,
                    tintColor: isStudentChecked ? COLORS.primary : COLORS.white,
                  }}
                  source={images.checked}
                />
              </View>
              <Text
                style={{
                  marginLeft: 10,
                  marginTop: 20,
                  ...Fonts.h3,
                  color: isStudentChecked ? COLORS.white : COLORS.black,
                }}>
                {stringConstants.iama}
              </Text>
              <Text
                style={{
                  marginLeft: 10,
                  ...Fonts.h2,
                  fontWeight: 'bold',
                  color: isStudentChecked ? COLORS.white : COLORS.black,
                }}>
                {stringConstants.student}
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
            }}>
            <TouchableOpacity
              onPress={() => updateCheckedStatus()}
              style={{
                flex: 1,
                backgroundColor: isTutorChecked ? COLORS.black : COLORS.gray,
                marginLeft: 10,
                marginRight: 5,
                borderRadius: 10,
              }}>
              <View style={styles.circle}>
                <Image
                  style={{
                    height: 20,
                    width: 20,
                    tintColor: isTutorChecked ? COLORS.primary : COLORS.white,
                  }}
                  source={images.checked}
                />
              </View>
              <Text
                style={{
                  marginLeft: 10,
                  marginTop: 20,
                  ...Fonts.h3,
                  color: isTutorChecked ? COLORS.white : COLORS.black,
                }}>
                {stringConstants.iama}
              </Text>
              <Text
                style={{
                  marginLeft: 10,
                  ...Fonts.h2,
                  color: isTutorChecked ? COLORS.white : COLORS.black,
                  fontWeight: 'bold',
                }}>
                {stringConstants.tutor}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.innerLayout}>
          <Text style={styles.inputTxtTitle}>{stringConstants.userName}</Text>
          <TextInput
            style={styles.txtinputSize}
            onChangeText={value => getUserName(value)}
          />
          <View style={styles.divider}></View>
          <Text>{userNameFailureMessage}</Text>

          <Text style={styles.inputTxtTitle}>{stringConstants.email}</Text>
          <TextInput
            style={styles.txtinputSize}
            onChangeText={value => getUserEmail(value)}
          />
          <View style={styles.divider}></View>
          <Text>{userEmailFailureMessage}</Text>
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

          <Text style={styles.txtLoginWith}>
            {stringConstants.orSignUpWith}
          </Text>

          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              <GoogleButton onPress={() => console.log('Google Button')} />
            </View>
            <View style={{flex: 1}}>
              <FaceBookButton onPress={() => console.log('FaceBook Button')} />
            </View>
          </View>

          <View style={styles.bottomView}>
            <Text>{stringConstants.alreadyAuser}</Text>

            <TouchableOpacity onPress={()=>onClickLoginButton()}>
            <Text style={styles.txtSignUpNow}>{stringConstants.login}</Text>
          </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default SignupView;
