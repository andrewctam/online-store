
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/home-screen/home-screen';
import CartScreen from './src/cart-screen/cart-screen';
import SellScreen from './src/sell-screen/sell-screen';
import ItemScreen from './src/item-screen.tsx/item-screen';
import { ItemBody, RootStackParamList } from './types';
import { useEffect, useState } from 'react';
import CheckoutScreen from './src/cart-screen/checkout-screen';
import { CartContext, UserContext } from './context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_URL } from './constants';
import YourItemsScreen from './src/home-screen/your-items-screen';


export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  const [cart, setCart] = useState<ItemBody[]>([]);
  const [userId, setUserId] = useState("");

  useEffect(() => {

    const checkId = async () => {
      const response = await fetch(`${API_URL}/api/userId`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: (await AsyncStorage.getItem("userId")) ?? ""
        })
      }).then((res) => res.json())
        .catch(err => console.log(err));

      setUserId(response);
      await AsyncStorage.setItem("userId", response);
    }
    
    checkId();
  }, [])

  return (
    <UserContext.Provider value={userId}>
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
              name="YourItemsScreen"
              component={YourItemsScreen}
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
    </UserContext.Provider>
  );
}
