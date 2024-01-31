import { StyleSheet, View } from "react-native";

const NavBar = () => {
    return (
        <View style={styles.bar}>
            Store
        </View>
    )
}

const styles = StyleSheet.create({
    bar: {
        width: "100%",
        height: 60,
        backgroundColor: "#abc"
    }
})
export default NavBar;