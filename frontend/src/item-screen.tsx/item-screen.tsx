import { StyleSheet, Text, View } from "react-native";
import Layout from "../shared/layout";
import { ParamListBase, RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import Button from "../shared/button";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useContext } from "react";
import { CartContext, UserContext } from "../../context";
import { RootStackParamList } from "../../types";
import { API_URL } from "../../constants";
import Section from "../shared/section";

const ItemScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const route = useRoute<RouteProp<RootStackParamList, 'ItemScreen'>>();

    const { cart, setCart } = useContext(CartContext);
    const userId = useContext(UserContext);

    if (!route.params) {
        return null;
    }

    const { name, price, isOwner, description, id } = route.params;


    const itemBody = { name, price, isOwner, description, id };

    const addToCart = () => {
        setCart([...cart, itemBody])
    }

    const removeFromCart = () => {
        setCart(cart.filter((item) => item.id !== itemBody.id));
    }

    const deleteItem = async () => {
        await fetch(`${API_URL}/api/deleteItem`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userId,
                itemId: id
            })
        })
            .then(() => navigation.goBack())
            .catch(err => console.log(err));
    }

    return (
        <Layout>
            <Section>
                <Text style={[styles.name, styles.center]}>
                    {name}
                </Text>
                <Text style={[styles.price, styles.center]}>
                    {"$" + price}
                </Text>

                <Text style={[styles.description, styles.center]}>
                    {description}
                </Text>

                {itemBody.isOwner ? (
                    <>
                        <Text style={[styles.center, styles.seller]}>
                            This is your item
                        </Text>
                        <Button
                            onPress={deleteItem}
                            text="Delete Item"
                            color="#d69987"
                        />
                    </>
                ) : cart.find((item) => item.id === id) ? (
                    <Button
                        onPress={removeFromCart}
                        text="Remove From Cart"
                        color="#e36e66"
                    />
                ) : (
                    <Button
                        onPress={addToCart}
                        text="Add To Cart"
                        color="#42f59e"
                    />
                )}

            </Section>

            <Button
                onPress={() => navigation.goBack()}
                text="Back"
            />
        </Layout>
    )
}

const styles = StyleSheet.create({
    name: {
        fontSize: 40,
    },
    price: {
        fontSize: 20
    },
    seller: {
        fontSize: 16
    },
    description: {
        margin: 20,
        fontSize: 16
    },
    center: {
        textAlign: "center",
    },
})

export default ItemScreen;
