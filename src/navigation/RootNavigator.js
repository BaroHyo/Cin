import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import AuthStack from './AuthStack';
import HomeStack from './HomeStack';

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
}
