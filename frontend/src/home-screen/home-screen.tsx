import { ScrollView, StyleSheet, Text } from "react-native";
import { ParamListBase, useIsFocused, useNavigation } from '@react-navigation/native';
import { useContext, useEffect, useState } from "react";
import { API_URL } from "../../constants";
import Layout from "../shared/layout";
import HomeItem from "./home-item";
import { ItemBody } from "../../types";
import Button from "../shared/button";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { UserContext } from "../../context";

const HomeScreen = () => {
    const [items, setItems] = useState<ItemBody[]>([]);
    const userId = useContext(UserContext);

    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const isFocused = useIsFocused();

    useEffect(() => {
        const getItems = async () => {
            const response = await fetch(`${API_URL}/api/items?userId=${userId}`)
                .then(res => res.json())
                .catch(err => console.log(err));

            setItems(response)
        }

        getItems();
    }, [isFocused])

    return (
        <Layout>
            <Text style={styles.title}>
                Home
            </Text>

            <Button
                onPress={() => navigation.navigate("SellScreen")}
                text="Add New Item"
            />

            <Button
                onPress={() => navigation.navigate("CartScreen")}
                text="View Cart"
            />

            <ScrollView>
                {items?.map((item, i) => (
                    <HomeItem
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
})

export default HomeScreen;
