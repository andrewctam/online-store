import { StyleSheet, Text, View } from "react-native";

interface ItemProps {
    name: string
}

const Item = (props: ItemProps) => {
    return (
        <View style={styles.container}>
            <Text>{props.name}</Text>
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
