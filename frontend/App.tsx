
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/home-screen/home-screen';
import CartScreen from './src/cart-screen/cart-screen';
import SellScreen from './src/sell-screen/sell-screen';
import ItemScreen from './src/item-screen.tsx/item-screen';
import { ItemBody } from './types';
import { createContext, useState } from 'react';
import CheckoutScreen from './src/cart-screen/checkout-screen';

export type RootStackParamList = {
  HomeScreen: undefined,
  CartScreen: undefined,
  CheckoutScreen: undefined,
  SellScreen: undefined,
  ItemScreen: ItemBody | undefined;
};

type CartContextType = { cart: ItemBody[], setCart: (cart: ItemBody[]) => void };
const defaultValue = { cart: [], setCart: () => { } };
export const CartContext = createContext<CartContextType>(defaultValue);


export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  const [cart, setCart] = useState<ItemBody[]>([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
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
            name="CartScreen"
            component={CartScreen}
          />
          <Stack.Screen
            name="CheckoutScreen"
            component={CheckoutScreen}
          />
          <Stack.Screen
            name="SellScreen"
            component={SellScreen}
          />
          <Stack.Screen
            name="ItemScreen"
            component={ItemScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </CartContext.Provider>
  );
}
