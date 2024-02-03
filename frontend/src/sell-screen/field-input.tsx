import { StyleSheet, Text, TextInput } from "react-native"

interface InputProps {
    label: string
    value: string
    setValue: (s: string) => void
    numberInput?: boolean
}

const FieldInput = (props: InputProps) => {

    return (
        <>
            <Text style={styles.label}>
                {props.label}
            </Text>

            <TextInput
                style={styles.input}
                value={props.value}
                onChangeText={props.setValue}
                keyboardType={props.numberInput ? "numeric" : "default"}
            />
        </>
    )
}


const styles = StyleSheet.create({
    label: {
        fontSize: 16,
        marginLeft: 10,
        marginTop: 20,
    },
    input: {
        height: 50,
        margin: 10,
        padding: 10,
        borderColor: "black",
        borderWidth: 1
    },

})

export default FieldInput;