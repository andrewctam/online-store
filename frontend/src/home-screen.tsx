import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationProp, ParamListBase } from '@react-navigation/native';

interface HomeScreenProps {
    navigation: NavigationProp<ParamListBase>
}

const HomeScreen = ({ navigation }: HomeScreenProps) => {
    const enterCart = () => {
        navigation.navigate("CartScreen");
    }
    return (
        <View>
            <Text>Home</Text>

            <View style={styles.button}>
                <Button
                    title="Cart"
                    onPress={enterCart}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 100,
        height: 20
    }
})

export default HomeScreen;