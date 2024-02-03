
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/home-screen/home-screen';
import CartScreen from './src/cart-screen/cart-screen';
import SellScreen from './src/sell-screen/sell-screen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
        />
        <Stack.Screen
          name="SellScreen"
          component={SellScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
