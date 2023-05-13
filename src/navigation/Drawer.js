import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useWindowDimensions } from 'react-native';
import HomeStack from './HomeStack';

const RootDrawer = createDrawerNavigator();

export default function Drawer() {
  const { width } = useWindowDimensions();

  return (
    <RootDrawer.Navigator
      screenOptions={{
        drawerType: width >= 768 ? 'permanent' : 'front',
      }}
    >
      <RootDrawer.Screen
        name="Stack"
        component={HomeStack}
        options={{ headerShown: false }}
      />
    </RootDrawer.Navigator>
  );
}
