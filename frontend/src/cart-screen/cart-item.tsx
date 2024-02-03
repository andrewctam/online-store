import { Pressable, StyleSheet, Text, View } from "react-native";
import { ItemBody } from "../../types";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamListBase, useNavigation } from "@react-navigation/native";

const CartItem = (props: ItemBody) => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

    const openItemScreen = () => {
        navigation.navigate("ItemScreen", { 
            ...props 
        });
    }

    return (
        <Pressable onPress={openItemScreen}>
            <View style={styles.container}>
                <Text style={styles.itemName}>{props.name}</Text>
                <Text style={styles.price}>{"$" + props.price}</Text>
            </View>
        </Pressable>
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
        fontSize: 24,
        marginBottom: 12,
    },
    price: {
        fontSize: 16
    },
})

export default CartItem;
