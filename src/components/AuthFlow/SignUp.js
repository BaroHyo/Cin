import React from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { setAuthState } from '../../features/auth';
import MyInput from '../MyInput';
import MyButton from '../MyButton';
import { Colors } from '../../constants/colors';

const SignUp = ({ onSignUp, setEmail, setPassword }) => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={styles.containerForm}>
      <Text style={styles.title}>Registrate</Text>
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
      <MyButton title="Registrar" onPress={onSignUp} />
      <View style={styles.containerRow}>
        <Text style={styles.parrafo}>Volver a? </Text>
        <TouchableOpacity onPress={() => dispatch(setAuthState('signIn'))}>
          <Text style={styles.titleButton}>Iniciar Sesion</Text>
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
export default SignUp;
