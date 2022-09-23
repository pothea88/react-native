import React from 'react';
import {Text, View, Button} from 'react-native';
import {SCREEN_NAME} from '../constant/constant';

const AboutScreen = props => {
  const eventHandler = screen => {
    return () => {
      props.navigation.navigate(screen);
    };
  };
  return (
    <View>
      <Text>About us</Text>
      <Button
        title="Go to Product screen"
        onPress={eventHandler(SCREEN_NAME.PRODUCT)}
      />
    </View>
  );
};
export default AboutScreen;
