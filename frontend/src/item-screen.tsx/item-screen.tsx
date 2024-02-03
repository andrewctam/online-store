import { StyleSheet, Text } from "react-native";
import Layout from "../shared/layout";
import { ParamListBase, RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import Button from "../shared/button";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { CartContext, RootStackParamList } from "../../App";
import { useContext } from "react";

const ItemScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const route = useRoute<RouteProp<RootStackParamList, 'ItemScreen'>>();

    const { cart, setCart } = useContext(CartContext);

    if (!route.params) {
        return null;
    }

    const { name, price, seller, description, id } = route.params;


    const itemBody = { name, price, seller, description, id };

    const addToCart = () => {
        setCart([...cart, itemBody])
    }

    const removeFromCart = () => {
        setCart(cart.filter((item) => item.id !== itemBody.id));
    }

    return (
        <Layout>
            <Text style={[styles.name, styles.center]}>
                {name}
            </Text>
            <Text style={[styles.price, styles.center]}>
                {"$" + price}
            </Text>
            <Text style={[styles.seller, styles.center]}>
                {`Sold by ${seller}`}
            </Text>
            <Text style={[styles.description, styles.center]}>
                {description}
            </Text>

            {cart.find((item) => item.id === id) ? (
                <Button
                    onPress={removeFromCart}
                    text="Remove From Cart"
                    color="#e36e66"
                />
            ) : (
                <Button
                    onPress={addToCart}
                    text="Add To Cart"
                    color="#42f59e"
                />
            )}

            <Button
                onPress={() => navigation.goBack()}
                text="Back"
            />
        </Layout>
    )
}

const styles = StyleSheet.create({
    name: {
        fontSize: 40,
    },
    price: {
        fontSize: 20
    },
    seller: {
        fontSize: 16
    },
    description: {
        margin: 20,
        fontSize: 16
    },
    center: {
        textAlign: "center",
    }
})

export default ItemScreen;
