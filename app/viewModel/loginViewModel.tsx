import React, {useState} from 'react';
import {stringConstants} from '../config/stringConstants';
import LoginView from '../view/Login/LoginView';

const LoginViewModel = ({navigation}: any) => {
  const [userName, setUserName] = useState<string>('');
  const [pass, setPass] = useState<string>('');
  const [userNameFailureMessage, setuserNameFailureMessage] =
    useState<string>('');
  const [passFailureMessage, setPassFailureMessage] = useState<string>('');
  const [emailIdPattern, setemailIdPattern] = useState(
    new RegExp('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
  );
  const [passwordPattern, setPasswordFailureMessage] = useState(
    new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'),
  );
  const [hideShowPass, setHideShowPass] = useState(false);

  const passPattern = new RegExp(
    '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})',
  );

  const getUserName = (name: string) => {
    setUserName(name);
  };
  const getPassword = (pass: string) => {
    setPass(pass);
  };
  const updateNameErrorMessage = () => {
    if (userName == '') {
      setuserNameFailureMessage(stringConstants.nameEmailError);
      setPassFailureMessage('');
    } else if (pass == '') {
      setPassFailureMessage(stringConstants.passError);
      setuserNameFailureMessage('');
      setHideShowPass(false);
    } else if (!passPattern.test(pass)) {
      setPassFailureMessage(stringConstants.passFormatError);
      setuserNameFailureMessage('');
    } else {
      navigation.navigate("ChooseCategories");
    }
  };

  const updateHideShowPass = () => {
    if (hideShowPass == true) {
      setHideShowPass(false);
    } else {
      setHideShowPass(true);
    }
  };
  const onClickSignUpButton=()=>{
    navigation.navigate("SignUp");
  }

  return (
    <LoginView
      navigation={navigation}
      userName={userName}
      pass={pass}
      userNameFailureMessage={userNameFailureMessage}
      passFailureMessage={passFailureMessage}
      hideShowPass={hideShowPass}
      getUserName={getUserName}
      getPassword={getPassword}
      updateNameErrorMessage={updateNameErrorMessage}
      updateHideShowPass={updateHideShowPass}
      onClickSignUpButton={onClickSignUpButton}
    />
  );
};
export default LoginViewModel;
