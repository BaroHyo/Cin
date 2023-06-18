import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Drawer from './Drawer';
import AuthStack from './AuthStack';
import { useDispatch, useSelector } from 'react-redux';
import { SplashScreen } from '../screens';
import { onAuthStateChanged } from 'firebase/auth';
import { restoreToken } from '../features/auth';
import { auth } from '../firebaseConfig';

export default function Wrapper() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

function RootNavigator() {
  const { userToken } = useSelector(state => state.auth);
  const [isLoading, setIsLoading] = useState(true);
  // const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, async user => {
      if (user) {
        dispatch(restoreToken(user.email));
        /*const userToSave = {
          id: user.uid,
          name: user.displayName,
          email: user.email,
          photoUrl: user.photoURL,
          createdAt: user.metadata.creationTime,
        };
        getUserFromDatabase(userToSave);
        const todos = await getTodosFromDatabase(user.uid);
        dispatch(setTodos(todos));
        dispatch(setUser(userToSave));
        dispatch(restoreToken(user.email));*/
      } else {
        console.log('user is not authenticated');
      }
      setIsLoading(false);
    });
    return unsubscribeAuth;
  }, []);

  async function getValue() {
    try {
      const value = await AsyncStorage.getItem('@token');
      if (value !== null) {
        console.log('data restored', value);
        dispatch(restoreToken(value));
        return value;
      } else {
        console.log('no data');
        dispatch(restoreToken(null));
      }
    } catch (error) {
      console.log(error);
    }
  }

  if (isLoading) {
    return <SplashScreen />;
  }
  return <>{userToken ? <Drawer /> : <AuthStack />}</>;
}
