import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native"

interface LayoutProps {
    children: React.ReactNode
}
const Layout = (props: LayoutProps) => {
    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.body}>
                <ScrollView>
                    {props.children}
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%"
    },
    body: {
        width: "100%",
        height: "100%",
    }
})
export default Layout;