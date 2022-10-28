import React from 'react';
import GetData from './test/list/GetData';
import Register from './test/Register/Register';
import NativeBase from './test/nativeBase/NativeBase';
import NativeElement from './test/NativeElement/NativeElement';
import UIKitten from './test/UIKitten/UIKitten';
import MaterialUI from './test/MaterialUI/MaterialUI';
import Nativation from './test/Navigation/Navigation';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './test/routes/routes';
import 'react-native-gesture-handler';

export default () => {
  return (
    <NavigationContainer>
      <Routes />
      {/* <Nativation /> */}
    </NavigationContainer>
  );
};
