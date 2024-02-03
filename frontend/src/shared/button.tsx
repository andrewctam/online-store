import { Pressable, StyleSheet, Text } from "react-native"

interface ButtonProps {
    color?: string,
    text: string,
    onPress: () => void
}

const Button = (props: ButtonProps) => {
    return (
        <Pressable
            style={[styles.button, props.color ? { "backgroundColor": props.color } : {}]}
            onPress={props.onPress}
        >
            <Text>{props.text}</Text>
        </Pressable>
    )
}


const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 40,
        paddingVertical: 10,
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 20,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        backgroundColor: "#93d2db"
    }
})

export default Button
