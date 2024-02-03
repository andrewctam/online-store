import { SafeAreaView, ScrollView, StyleSheet } from "react-native"

interface LayoutProps {
    children: React.ReactNode
}
const Layout = (props: LayoutProps) => {
    return (
        <SafeAreaView style={styles.body}>
            <ScrollView>
                {props.children}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    body: {
        width: "100%",
        height: "100%",
    }
})
export default Layout;