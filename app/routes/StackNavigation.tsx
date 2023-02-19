import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  OnBoardingViewModel,
  LoginViewModel,
  SignupViewModel,
  ChooseCategoryViewModel,
  HomeView,
} from '../viewModel';

type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  OnBoarding: undefined;
  ChooseCategories: undefined;
  homeView: undefined;
};

const stack = createStackNavigator<RootStackParamList>();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <stack.Navigator initialRootName="OnBoarding">
        <stack.Screen
          name="OnBoarding"
          component={OnBoardingViewModel}
          options={{headerShown: false}}
        />
        <stack.Screen
          name="Login"
          component={LoginViewModel}
          options={{headerShown: false}}
        />
        <stack.Screen
          name="SignUp"
          component={SignupViewModel}
          options={{headerShown: false}}
        />
        <stack.Screen
          name="ChooseCategories"
          component={ChooseCategoryViewModel}
          options={{headerShown: false}}
        />
        <stack.Screen
          name="homeView"
          component={HomeView}
          options={{headerShown: false}}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
};
export default StackNavigation;
