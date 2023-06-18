import { View, Text, ActivityIndicator } from 'react-native';
import React from 'react';
import { globalStyles } from '../styles/global';

export function SplashScreen() {
  return (
    <View style={globalStyles.screenContainer}>
      <Text style={globalStyles.title}>Welcome</Text>
      <ActivityIndicator size="large" />
    </View>
  );
}
