import React from 'react';
import {
  Stack,
  ActivityIndicator,
  AppBar,
  Avatar,
} from '@react-native-material/core';
import {SafeAreaView} from 'react-native';

const MaterialUI = () => {
  return (
    <>
      <SafeAreaView>
        <AppBar title="Screen title" />
      </SafeAreaView>
      <Stack fill center spacing={4}>
        <ActivityIndicator />
        <ActivityIndicator size="large" />
        <ActivityIndicator size="small" color="error" />
        <ActivityIndicator size="large" color="#00ff00" />
      </Stack>
      <Stack fill center spacing={4}>
        <Avatar label="Kent Dodds" />
        <Avatar label="UN" initials={false} />
        <Avatar label="Jed Watson" autoColor />
        <Avatar label="Tim Neutkens" autoColor />
      </Stack>
    </>
  );
};
export default MaterialUI;
