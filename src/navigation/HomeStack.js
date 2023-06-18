import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FontAwesome } from '@expo/vector-icons';
import {
  CustomerScreen,
  HomeScreen,
  ProductScreen,
  MapScreen,
  PedidoScreen,
  DistribucionScreen,
  VisitaScreen,
  RegistrosScreen,
  DetalleScreen,
  ClienteScreen,
  ResumenScreen,
} from '../screens';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator();
const StackMavtivo = createNativeStackNavigator();

function ProductoStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Producto" component={ProductScreen} />
      <Stack.Screen name="Detalle" component={DetalleScreen} />
    </Stack.Navigator>
  );
}

function ClienteStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Clientes" component={CustomerScreen} />
      <Stack.Screen name="Cliente" component={ClienteScreen} />
    </Stack.Navigator>
  );
}

function VisitaStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Visita" component={VisitaScreen} />
      <Stack.Screen name="Resumen" component={ResumenScreen} />
    </Stack.Navigator>
  );
}

export default function HomeStack() {
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        headerTitleAlign: 'center',
        presentation: 'push',
        gestureEnabled: true,
        keyboardHandlingEnabled: true,
      }}
    >
      <Stack.Screen
        name="Home"
        options={{
          headerShown: true,
          title: null,
          headerLeft: () => (
            <Pressable onPress={() => navigation.openDrawer()}>
              <FontAwesome
                name="align-left"
                style={{ marginLeft: 20 }}
                size={25}
              />
            </Pressable>
          ),
          headerRight: () => (
            <Pressable onPress={() => console.log(1)}>
              <FontAwesome
                name="user-circle"
                style={{ marginRight: 20 }}
                size={25}
              />
            </Pressable>
          ),
        }}
        component={HomeScreen}
      />
      <Stack.Screen name="ProductoStack" component={ProductoStack} />
      <Stack.Screen name="ClienteStack" component={ClienteStack} />
      <Stack.Screen name="Pedido" component={PedidoScreen} />
      <Stack.Screen name="Map" component={MapScreen} />
      <Stack.Screen name="Distribucion" component={DistribucionScreen} />
      <Stack.Screen name="VisitaStack" component={VisitaStack} />
      <Stack.Screen name="Registros" component={RegistrosScreen} />
    </Stack.Navigator>
  );
}
