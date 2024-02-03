import { Pressable, StyleSheet, Text, TextInput } from "react-native";
import { API_URL } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import Layout from "../shared/layout";
import { useState } from "react";

const SellScreen = () => {
    const [itemName, setItemName] = useState("");
    const navigate = useNavigation();
    const createItem = async () => {
        if (itemName.length === 0) {
            return;
        }

        await fetch(`${API_URL}/api/create`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: itemName
            })
        }).then(() => navigate.navigate("HomeScreen"))
          .catch(err => console.log(err));
    }

    return (
        <Layout>
            <Text style={styles.title}>Add New Item</Text>

            <TextInput
                style={styles.input}
                value={itemName}
                onChangeText={setItemName}
            />

            <Pressable
                style={styles.button}
                onPress={createItem}
            >
                <Text>Create</Text>
            </Pressable>
        </Layout>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 40,
        textAlign: "center"
    },
    input: {
        height: 50,
        margin: 10,
        padding: 10,
        borderColor: "black",
        borderWidth: 1
    },
    button: {
        width: 150,
        height: 50,
        padding: 10,
        marginLeft: "auto",
        marginRight: "auto",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        backgroundColor: "#94bad1"

    }
})

export default SellScreen;