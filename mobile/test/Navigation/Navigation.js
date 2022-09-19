import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SettingsScreen from './SettingsScreen';
import ProfileScreen from './ProfileScreen';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailScreen';

const Navigation = () => {
  const Tab = createBottomTabNavigator();
  const SettingStack = createNativeStackNavigator();
  const HomeStack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShow: false}}>
        <Tab.Screen name="First">
          {() => (
            <SettingStack.Navigator>
              <SettingStack.Screen name="Settings" component={SettingsScreen} />
              <SettingStack.Screen name="Profile" component={ProfileScreen} />
            </SettingStack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen name="Second">
          {() => (
            <HomeStack.Navigator>
              <HomeStack.Screen name="Home" component={HomeScreen} />
              <HomeStack.Screen name="Details" component={DetailsScreen} />
            </HomeStack.Navigator>
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
