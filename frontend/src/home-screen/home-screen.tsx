import { Pressable, ScrollView, StyleSheet, Text } from "react-native";
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { useEffect, useState } from "react";
import { API_URL } from "../../constants";
import Layout from "../shared/layout";
import Item from "./item";
import { ItemBody } from "../../types";



const HomeScreen = () => {
    const [items, setItems] = useState<ItemBody[]>([]);
    const navigation = useNavigation();
    const isFocused = useIsFocused();

    useEffect(() => {
        const getItems = async () => {
            const response = await fetch(`${API_URL}/api/items`)
                .then(res => res.json())
                .catch(err => console.log(err));

            console.log(response)
            setItems(response)
        }

        getItems();
    }, [isFocused])

    return (
        <Layout>
            <Text style={styles.title}>
                Home
            </Text>

            <Pressable
                style={styles.button}
                onPress={() => navigation.navigate("SellScreen")}
            >
                <Text>List New Item</Text>
            </Pressable>

            <ScrollView>
                {items?.map((item, i) => (
                    <Item 
                        key={i}
                        {...item}
                    />
                ))}
            </ScrollView>
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
        paddingHorizontal: 40,
        paddingVertical: 10,
        marginLeft: "auto",
        marginRight: "auto",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        backgroundColor: "#94bad1"
    }
})

export default HomeScreen;