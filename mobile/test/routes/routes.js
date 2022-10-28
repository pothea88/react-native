import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutUsScreen';
import ProductScreen from '../screens/ProductScreen';
import SettingScreen from '../screens/SettingScreen';
import {SCREEN_NAME} from '../constant/constant';

const stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackNavigator = () => {
  <stack.Navigator initialRouteName={SCREEN_NAME.HOME_SCREEN}>
    <stack.Screen name={SCREEN_NAME.HOME_SCREEN} component={HomeScreen} />
    <stack.Screen name={SCREEN_NAME.ABOUTUS_SCREEN} component={AboutScreen} />
    <stack.Screen name={SCREEN_NAME.PRODUCT} component={ProductScreen} />
  </stack.Navigator>;
};
const Routes = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name={SCREEN_NAME.HOME_SCREEN}
        component={HomeStackNavigator}
        options={{headerShown: true}}
      />
      <Drawer.Screen name={SCREEN_NAME.SETTING} component={SettingScreen} />
    </Drawer.Navigator>
  );
};
export default Routes;
