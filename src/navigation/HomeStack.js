import { createStackNavigator } from '@react-navigation/stack';
import { CustomerScreen, HomeScreen, ProductScreen , MapScreen} from '../screens';

const Home = createStackNavigator();

export default function HomeStack() {
  return (
    <Home.Navigator initialRouteName="Home">
      <Home.Screen name="Home" component={HomeScreen} />
      <Home.Screen name="Product" component={ProductScreen} />
      <Home.Screen name="Customer" component={CustomerScreen} />
      <Home.Screen name="Map" component={MapScreen} />
    </Home.Navigator>
  );
}
