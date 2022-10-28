import React from 'react';
import {Text, View, Button} from 'react-native';
import {SCREEN_NAME} from '../constant/constant';

const SettingScreen = props => {
  //   const eventHandler = screen => {
  //     return () => {
  //       props.navigation.navigate(screen);
  //     };
  //   };
  return (
    <View>
      <Text>Settings</Text>
      {/* <Button
        title="Go to home screen"
        onPress={eventHandler(SCREEN_NAME.HOME_SCREEN)}
      /> */}
    </View>
  );
};
export default SettingScreen;
