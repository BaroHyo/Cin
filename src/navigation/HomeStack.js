import { createStackNavigator } from '@react-navigation/stack';
import { CustomerScreen, HomeScreen, ProductScreen , MapScreen, PedidoScreen, DistribucionScreen, VisitaScreen, RegistrosScreen} from '../screens';

const Home = createStackNavigator();

const myConfig = {
  headerShown: true,
  headerTitleAlign: 'center',
  presentation: 'push',
  gestureEnabled: true,
  keyboardHandlingEnabled: true,
  /*header: ({ navigation, route, options, back }) => (
    <CustomHeader title={route.name} />
  ),*/
}; 

export default function HomeStack() {
  return (
    <Home.Navigator initialRouteName="Home" screenOptions={myConfig}>
      <Home.Screen name="Home" component={HomeScreen} />
      <Home.Screen name="Producto" component={ProductScreen} />
      <Home.Screen name="Customer" component={CustomerScreen} />
      <Home.Screen name="Pedido" component={PedidoScreen} />
      <Home.Screen name="Map" component={MapScreen} />
      <Home.Screen name="Distribucion" component={DistribucionScreen} />
      <Home.Screen name="Visita" component={VisitaScreen} />
      <Home.Screen name="Registros" component={RegistrosScreen} />
    </Home.Navigator>
  );
}
