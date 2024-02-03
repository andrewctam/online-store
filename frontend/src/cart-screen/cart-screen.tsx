import { ParamListBase, useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet, Text } from "react-native";
import Layout from "../shared/layout";
import Button from "../shared/button";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const CartScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

    return (
        <Layout>
            <Text style={styles.title}>Cart</Text>

            <Button
                text="Back"
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
})

export default CartScreen;
