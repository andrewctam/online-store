import { Pressable, StyleSheet, Text, View } from "react-native";
import { ItemBody } from "../../types";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const HomeItem = (props: ItemBody) => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

    const openItemScreen = () => {
        navigation.navigate("ItemScreen", { 
            ...props 
        });
    }
    const backgroundColor = props.isOwner ? "#9daec9" : "#96e3d2";

    return (
        <Pressable onPress={openItemScreen}>
            <View style={[styles.container, { backgroundColor } ]}>
                <Text style={styles.itemName}>{props.name}</Text>
                <Text>{props.description}</Text>

                <Text style={styles.price}>{"$" + props.price}</Text>
            </View>
        </Pressable >
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 8,
        padding: 16,
        borderRadius: 4
    },
    itemName: {
        fontSize: 28,
        marginBottom: 12,
    },
    price: {
        position: "absolute",
        top: 16,
        right: 16,
        fontSize: 20
    },

})

export default HomeItem;
