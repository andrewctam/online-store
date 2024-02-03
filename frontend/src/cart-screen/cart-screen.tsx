import { StyleSheet, Text, View } from "react-native";
import Layout from "../shared/layout";

const CartScreen = () => {
    return (
        <Layout>
            <Text style={styles.title}>Cart</Text>
        </Layout>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 100,
        height: 20
    },
    title: {
        fontSize: 40,
        textAlign: "center"
    },
})


export default CartScreen;