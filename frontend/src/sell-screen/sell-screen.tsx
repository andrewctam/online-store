import { StyleSheet, Text } from "react-native";
import { API_URL } from "../../constants";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import Layout from "../shared/layout";
import { useContext, useState } from "react";
import FieldInput from "./field-input";
import Button from "../shared/button";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { UserContext } from "../../context";

const SellScreen = () => {
    const [price, setPrice] = useState("");
    const [itemName, setItemName] = useState("");
    const [itemDescription, setItemDescription] = useState("");
    const [error, setError] = useState("");

    const userId = useContext(UserContext);

    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

    const createItem = async () => {
        if (itemName.length === 0 || price.length === 0 || itemDescription.length === 0) {
            setError("Please fill in all fields");
            return;
        }

        const priceNum = parseFloat(price)

        if (isNaN(priceNum)) {
            setError("Price is not a number");
            return;
        }

        await fetch(`${API_URL}/api/createItem`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                seller: userId,
                name: itemName,
                description: itemDescription,
                price: priceNum
            })
        })
            .then(() => navigation.navigate("HomeScreen"))
            .catch(err => console.log(err));
    }

    return (
        <Layout>
            <Text style={styles.title}>Add New Item</Text>

            <FieldInput
                label="Item Name"
                value={itemName}
                setValue={setItemName}
            />
            <FieldInput
                label="Price"
                value={price}
                setValue={setPrice}
                numberInput
            />
            <FieldInput
                label="Description"
                value={itemDescription}
                setValue={setItemDescription}
            />

            <Text style={styles.error}>
                {error}
            </Text>

            <Button
                onPress={createItem}
                color="#a9eba2"
                text="Create"
            />

            <Button
                onPress={() => navigation.navigate("HomeScreen")}
                color="#d69987"
                text="Cancel"
            />
        </Layout>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 40,
        textAlign: "center"
    },
    error: {
        color: "red",
        textAlign: "center"
    },
})

export default SellScreen;