import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutUsScreen';
import ProductScreen from '../screens/ProductScreen';
import {SCREEN_NAME} from '../constant/constant';

const Routes = () => {
  const stack = createNativeStackNavigator();
  return (
    <stack.Navigator initialRouteName={SCREEN_NAME.HOME_SCREEN}>
      <stack.Screen name={SCREEN_NAME.HOME_SCREEN} component={HomeScreen} />
      <stack.Screen name={SCREEN_NAME.ABOUTUS_SCREEN} component={AboutScreen} />
      <stack.Screen name={SCREEN_NAME.PRODUCT} component={ProductScreen} />
    </stack.Navigator>
  );
};
export default Routes;
