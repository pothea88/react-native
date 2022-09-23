import React from 'react';
import {Text, View, Button} from 'react-native';
import {SCREEN_NAME} from '../constant/constant';

const HomeScreen = props => {
  const eventHandler = screen => {
    return () => {
      props.navigation.navigate(screen);
    };
  };
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Go to about us screen"
        onPress={eventHandler(SCREEN_NAME.ABOUTUS_SCREEN)}
      />
    </View>
  );
};
export default HomeScreen;
