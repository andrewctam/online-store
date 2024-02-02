import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native"
import NavBar from "./nav-bar";

interface LayoutProps {
    children: React.ReactNode
}
const Layout = (props: LayoutProps) => {
    return (
        <SafeAreaView style={styles.body}>
            <ScrollView>
                <NavBar />
                {props.children}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    body: {
        width: "100%",
        height: "100%"
    }
})
export default Layout;