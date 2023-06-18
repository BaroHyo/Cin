import React from 'react';
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { setAuthState } from '../../features/auth';
import { Colors } from '../../constants/colors';
import MyInput from '../MyInput';
import MyButton from '../MyButton';

const Login = ({ onLogin, setEmail, setPassword }) => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={styles.containerForm}>
      <Text style={styles.title}>Iniciar Seccion</Text>
      <MyInput
        placeholder="Correo"
        autoCapitalize="none"
        keyboardType="email-address"
        textContentType="emailAddress"
        onChangeText={setEmail}
      />
      <MyInput
        placeholder="Contraseña"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
        textContentType="password"
        onChangeText={setPassword}
      />
      <MyButton title="Ingresar" onPress={onLogin} />
      <View style={styles.containerRow}>
        <Text style={styles.parrafo}>No tienes una cuenta? </Text>
        <TouchableOpacity onPress={() => dispatch(setAuthState('signUp'))}>
          <Text style={styles.titleButton}>Inscribirse</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  containerForm: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 30,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: Colors.primary,
    alignSelf: 'center',
    paddingBottom: 24,
  },
  containerRow: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  parrafo: {
    color: 'gray',
    fontWeight: '600',
    fontSize: 14,
  },
  titleButton: {
    color: Colors.primary,
    fontWeight: '600',
    fontSize: 14,
  },
});

export default Login;
