import React from 'react';
import {View, Text, Button} from 'react-native';

function SettingsScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{margin: 10}}>Settings!</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}
export default SettingsScreen;
