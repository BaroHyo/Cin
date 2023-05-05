import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens';

const Auth = createStackNavigator();

export default function AuthStack() {
  return (
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
        animationTypeForReplace: 'pop',
      }}
    >
      <Auth.Screen name="Login" component={LoginScreen} />
    </Auth.Navigator>
  );
}
