import React from 'react';
import {View, Text, Button} from 'react-native';

function DetailsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <Button
        title="Go back profile"
        onPress={() => navigation.navigate('Profile')}
      />
      <Button title="Back Home" onPress={() => navigation.goBack()} />
      <Button
        title="Back to First Screen"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}
export default DetailsScreen;
