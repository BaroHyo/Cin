import React from 'react';
import { Alert, Image, StatusBar, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { setAuthState, signOut } from '../../features/auth';
import { auth } from '../../firebaseConfig';
import { validateEmail, validatePassword } from '../../utils/validation';
import Login from '../../components/AuthFlow/Login';
import SignUp from '../../components/AuthFlow/SignUp';

const backImage = require('../../../assets/backImage.png');

const Auth = () => {
  const dispatch = useDispatch();
  const { authState } = useSelector(state => state.auth);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  console.log(authState);

  const onLogin = () => {
    const errorEmail = validateEmail(email);
    const errorPassword = validatePassword(password);
    if (errorEmail || errorPassword) {
      Alert.alert(errorEmail, errorPassword);
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then(user => {
          console.log('login success', user);
          alert('signed in success');
          dispatch(setAuthState('signedIn'));
        })
        .catch(err => Alert.alert('Login error', err.message));
    }
  };

  const onSignUp = () => {
    const errorEmail = validateEmail(email);
    const errorPassword = validatePassword(password);
    if (errorEmail || errorPassword) {
      Alert.alert(errorEmail, errorPassword);
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then(user => {
          console.log('Signup success', user);
          alert('Signup success');
          dispatch(setAuthState('signedIn'));
        })
        .catch(err => Alert.alert('Signup error', err.message));
    }
  };

  const onSignOut = () => {
    signOut(auth).catch(err => console.log(err));
  };

  return (
    <View style={styles.container}>
      <Image source={backImage} style={styles.backImage} />
      <View style={styles.whiteSheet} />
      {authState === 'signIn' && (
        <Login
          onLogin={onLogin}
          setEmail={setEmail}
          setPassword={setPassword}
        />
      )}
      {authState === 'signUp' && (
        <SignUp
          onSignUp={onSignUp}
          setEmail={setEmail}
          setPassword={setPassword}
        />
      )}
      <StatusBar barStyle="light-content" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backImage: {
    width: '100%',
    height: 340,
    position: 'absolute',
    top: 0,
    resizeMode: 'cover',
  },
  whiteSheet: {
    width: '100%',
    height: '75%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#fff',
    borderTopLeftRadius: 60,
  },
});

export default Auth;
