import { Pressable, ScrollView, StyleSheet, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from "react";
import { API_URL } from "../../constants";
import Layout from "../shared/layout";


const HomeScreen = () => {
    const [items, setItems] = useState([]);
    const navigate = useNavigation();

    useEffect(() => {
        const getItems = async () => {
            const response = await fetch(`${API_URL}/api/items`)
                .then(res => res.json())
                .catch(err => console.log(err));

            console.log(response)
            setItems(response)
        }

        getItems();
    }, [])

    return (
        <Layout>
            <Text style={styles.title}>
                Home
            </Text>

            <ScrollView>
                {items?.map((i: { name: string }) => <Text>{i.name}</Text>)}
            </ScrollView>

            <Pressable
                style={styles.button}
                onPress={() => navigate.navigate("SellScreen")}
            >
                <Text>Sell Item</Text>
            </Pressable>

        </Layout >
    )
}

const styles = StyleSheet.create({
    items: {
        flex: 3,
        flexWrap: "wrap"
    },
    title: {
        fontSize: 40,
        textAlign: "center"
    },
    button: {
        width: 100,
        height: 50,
        padding: 10,
        backgroundColor: "#778829"

    }
})

export default HomeScreen;