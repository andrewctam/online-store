import { useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet, Text, View } from "react-native";

const NavBar = () => {
    const navigation = useNavigation();

    const enterCart = () => {
        navigation.navigate("CartScreen");
    }

    return (
        <View style={styles.bar}>
            <Text>Store</Text>

            <Pressable
                style={styles.button}
                onPress={enterCart}
            >
                <Text>Cart</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    bar: {
        width: "100%",
        height: 60,
        backgroundColor: "#abc"
    },
    button: {
        width: 100,
        height: 50,
        padding: 10,
        backgroundColor: "#778829"

    }
})
export default NavBar;