import { Pressable, StyleSheet, Text, View } from "react-native";
import { ItemBody } from "../../types";
import Layout from "../shared/layout";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import Button from "../shared/button";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const ItemScreen = (props: ItemBody) => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

    return (
        <Layout>
            <Button
                onPress={() => navigation.navigate("HomeScreen")}
                text="Back"
            />

            <Text style={styles.itemName}>{props.name}</Text>
            <Text>{`Description:\n${props.description}`}</Text>

            <Text style={styles.price}>{props.price}</Text>
            <Text style={styles.seller}>{`Seller: ${props.seller}`}</Text>
        </Layout>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#9daec9",
        margin: 8,
        padding: 16,
        borderRadius: 4
    },
    itemName: {
        fontSize: 28,
        marginBottom: 12,
    },
    price: {
        position: "absolute",
        top: 4,
        right: 4,
        fontSize: 16
    },
    seller: {
        position: "absolute",
        bottom: 4,
        right: 4,
        fontSize: 16
    },
})

export default ItemScreen;
