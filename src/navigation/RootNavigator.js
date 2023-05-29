import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Drawer from './Drawer';
//import AuthStack from './AuthStack';

export default function RootNavigator() {
    return (
        <NavigationContainer>
            <Drawer/>
        </NavigationContainer>
    );
}
