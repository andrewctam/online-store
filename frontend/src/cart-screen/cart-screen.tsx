import { StyleSheet, Text, View } from "react-native";
import Layout from "../shared/layout";

const CartScreen = () => {
    return (
        <Layout>
            <Text>Cart</Text>
        </Layout>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 100,
        height: 20
    }
})


export default CartScreen;