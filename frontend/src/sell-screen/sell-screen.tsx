import { Pressable, StyleSheet, Text, TextInput } from "react-native";
import { API_URL } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import Layout from "../shared/layout";
import { useState } from "react";
import FieldInput from "./field-input";

const SellScreen = () => {
    const [sellerName, setSellerName] = useState("");
    const [price, setPrice] = useState("$");
    const [itemName, setItemName] = useState("");
    const [itemDescription, setItemDescription] = useState("");

    const navigate = useNavigation();

    const createItem = async () => {
        if (itemName.length === 0 || sellerName.length === 0 || price.length === 0 || itemDescription.length === 0) {
            return;
        }

        await fetch(`${API_URL}/api/create`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                seller: sellerName,
                name: itemName,
                description: itemDescription
            })
        }).then(() => navigate.navigate("HomeScreen"))
            .catch(err => console.log(err));
    }

    return (
        <Layout>
            <Text style={styles.title}>Add New Item</Text>

            <FieldInput
                label="Your Name"
                value={sellerName}
                setValue={setSellerName}
            />
            <FieldInput
                label="Price"
                value={price}
                setValue={setPrice}
                numberInput
            />
            <FieldInput
                label="Item Name"
                value={itemName}
                setValue={setItemName}
            />
            <FieldInput
                label="Description"
                value={itemDescription}
                setValue={setItemDescription}
            />


            <Pressable
                style={[styles.button, { "backgroundColor": "#a9eba2" }]}
                onPress={createItem}
            >
                <Text>Create</Text>
            </Pressable>

            <Pressable
                style={[styles.button, { "backgroundColor": "#f06e6e" }]}
                onPress={() => navigate.navigate("HomeScreen")}
            >
                <Text>Cancel</Text>
            </Pressable>


        </Layout>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 40,
        textAlign: "center"
    },
    button: {
        paddingHorizontal: 40,
        paddingVertical: 10,
        margin: 10,
        marginLeft: "auto",
        marginRight: "auto",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
    }
})

export default SellScreen;