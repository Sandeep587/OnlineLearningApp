import React, {useState} from 'react';
import {COLORS, Dimension, Fonts, images, Themes} from '../theme';
import {stringConstants} from '../config/stringConstants';
import SignupView from '../view/SignUp/SingupView';

const SignupViewModel = ({navigation}: any) => {
  const [isStudentChecked, setIsStudentChecked] = useState(true);
  const [isTutorChecked, setIsTutorChecked] = useState(false);
  const [userName, setUserName] = useState<string>('');
  const [userEmail, setUserEmail] = useState<string>('');
  const [pass, setPass] = useState<string>('');
  const [userNameFailureMessage, setuserNameFailureMessage] =
    useState<string>('');
  const [userEmailFailureMessage, setuserEmailFailureMessage] =
    useState<string>('');
  const [passFailureMessage, setPassFailureMessage] = useState<string>('');
  const [emailIdPattern, setemailIdPattern] = useState(
    new RegExp('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
  );
  const [passwordPattern, setPasswordFailureMessage] = useState(
    new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'),
  );
  const [hideShowPass, setHideShowPass] = useState(false);

  const emailPattern = new RegExp(
    '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$',
  );
  const passPattern = new RegExp(
    '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})',
  );

  const updateCheckedStatus = () => {
    if (isStudentChecked == false) {
      setIsTutorChecked(false);
      setIsStudentChecked(true);
    } else if (isTutorChecked == false) {
      setIsTutorChecked(true);
      setIsStudentChecked(false);
    }
  };
  const getUserName = (name: string) => {
    setUserName(name);
  };
  const getPassword = (pass: string) => {
    setPass(pass);
  };
  const getUserEmail = (email: string) => {
    setUserEmail(email);
  };
  const updateNameErrorMessage = () => {
    if (userName == '') {
      setuserNameFailureMessage(stringConstants.userNameError);
      setPassFailureMessage('');
      setuserEmailFailureMessage('');
    } else if (userEmail == '') {
      setuserEmailFailureMessage(stringConstants.emailError);
      setPassFailureMessage('');
      setuserNameFailureMessage('');
    } else if (!emailIdPattern.test(userEmail)) {
      setuserEmailFailureMessage(stringConstants.emailFormatError);
      setPassFailureMessage('');
      setuserNameFailureMessage('');
    } else if (pass == '') {
      setPassFailureMessage(stringConstants.passError);
      setuserNameFailureMessage('');
      setHideShowPass(false);
      setuserEmailFailureMessage('');
    } else if (!passPattern.test(pass)) {
      setPassFailureMessage(stringConstants.passFormatError);
      setuserNameFailureMessage('');
      setuserEmailFailureMessage('');
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
   
  const onClickLoginButton=()=>{
    navigation.navigate("Login")
  }

  return (
    <SignupView
      isStudentChecked={isStudentChecked}
      isTutorChecked={isTutorChecked}
      userEmailFailureMessage={userEmailFailureMessage}
      userName={userName}
      pass={pass}
      userNameFailureMessage={userNameFailureMessage}
      passFailureMessage={passFailureMessage}
      hideShowPass={hideShowPass}
      updateCheckedStatus={updateCheckedStatus}
      getUserName={getUserName}
      getPassword={getPassword}
      getUserEmail={getUserEmail}
      updateNameErrorMessage={updateNameErrorMessage}
      updateHideShowPass={updateHideShowPass}
      onClickLoginButton={onClickLoginButton}
    />
  );
};
export default SignupViewModel;
