import { Pressable, StyleSheet, Text, TextInput } from "react-native";
import { API_URL } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import Layout from "../shared/layout";
import { useState } from "react";

const SellScreen = () => {
    const [itemName, setItemName] = useState("");
    const navigate = useNavigation();
    const createItem = async () => {
        console.log(API_URL)
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
    input: {
        height: 50,
        width: "100%",
        borderBlockColor: "black",
        borderWidth: 1
    },
    button: {
        width: 100,
        height: 50,
        padding: 10,
        backgroundColor: "#778829"

    }
})

export default SellScreen;