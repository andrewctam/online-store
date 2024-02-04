import { StyleSheet, Text, View } from "react-native";
import Layout from "../shared/layout";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../App";
import Button from "../shared/button";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { API_URL } from "../../constants";

const CheckoutScreen = () => {
    const [error, setError] = useState("")

    const { cart, setCart } = useContext(CartContext);
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

    useEffect(() => {
        const checkout = async () => {
            await fetch(`${API_URL}/api/checkout`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    items: cart.map(item => item.id)
                })
            }).then(() => setCart([]))
            .catch(err => console.log(err));
        }

        checkout();
    }, []);

    return (
        <Layout>
            <Text style={styles.title}>
                Checkout
            </Text>

            <Text style={styles.text}>
                Thank you for your purchase!
            </Text>

            <Button
                text="Back To Home"
                onPress={() => navigation.navigate("HomeScreen")}
            />
        </Layout>
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


export default CheckoutScreen;
