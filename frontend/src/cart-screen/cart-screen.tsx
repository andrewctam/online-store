import { ParamListBase, useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet, Text } from "react-native";
import Layout from "../shared/layout";
import Button from "../shared/button";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { CartContext } from "../../App";
import { useContext } from "react";

const CartScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const { cart } = useContext(CartContext);

    return (
        <Layout>
            <Text style={styles.title}>Cart</Text>

            <Button
                text="Back"
                onPress={() => navigation.navigate("HomeScreen")}
            />

            {cart.map((item, i) => (
                <Text key={i}>
                    {item.id}
                </Text>
            ))}

            {cart.length === 0 && (
                <Text style={styles.empty}>
                    Cart Is Empty
                </Text>
            )}
        </Layout>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 40,
        textAlign: "center"
    },
    empty: {
        marginTop: 20,
        fontSize: 20,
        textAlign: "center"
    }
})

export default CartScreen;
