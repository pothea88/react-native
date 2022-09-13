import React from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  SafeAreaView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
} from 'react-native';

const ButtonTest = () => {
  const handleClick = () => {
    alert('Click me');
  };

  const handleOnChangeText = (val) => {
    alert(val);
  }

  return (
    <SafeAreaView>
      <Button title="Click" onPress={handleClick} />
      <TextInput onChangeText={handleOnChangeText} />
    </SafeAreaView>
  );
};
export default ButtonTest;