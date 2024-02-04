import { StyleSheet, View } from "react-native"

interface SectionProps {
    children: React.ReactNode,
    color?: string
}
const Section = (props: SectionProps) => {
    return (
        <View style={[styles.container, props.color ? { backgroundColor: props.color } : {}]}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#aeb5b5",
        padding: 10
    },

})
export default Section;