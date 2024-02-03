import { StyleSheet, Text, View } from "react-native";
import { ItemBody } from "../../types";

const Item = (props: ItemBody) => {
    return (
        <View style={styles.container}>
            <Text>{props.seller}</Text>
            <Text>{props.name}</Text>
            <Text>{props.description}</Text>
            <Text>{props.price}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#e0dba4",
        margin: 8,
        padding: 8,
        borderRadius: 4
    }
})

export default Item;
