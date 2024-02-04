import { ParamListBase, useNavigation } from "@react-navigation/native";
import { StyleSheet, Text } from "react-native";
import Layout from "../shared/layout";
import Button from "../shared/button";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useContext } from "react";
import CartItem from "./cart-item";
import { CartContext } from "../../context";

const CartScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const { cart } = useContext(CartContext);

    const total = cart.reduce((acc, cur) => {
        return acc + cur.price;
    }, 0);

    return (
        <Layout>
            <Text style={styles.title}>Cart</Text>

            <Button
                text="Back"
                onPress={() => navigation.navigate("HomeScreen")}
            />

            {cart.map((item, i) => (
                <CartItem
                    key={i}
                    {...item}
                />
            ))}

            <Text style={styles.text}>
                {cart.length > 0 ? `Total: $${total}` : "Cart Is Empty"}
            </Text>

            {cart.length > 0 && (
                <Button
                    text="Checkout"
                    onPress={() => navigation.navigate("CheckoutScreen")}
                    color="#c49fed"
                />
            )}
        </Layout >
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 40,
        textAlign: "center"
    },
    text: {
        marginTop: 20,
        fontSize: 20,
        textAlign: "center"
    },
})

export default CartScreen;
