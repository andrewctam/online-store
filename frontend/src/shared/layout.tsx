import { View } from "react-native"
import NavBar from "./nav-bar";

interface LayoutProps {
    children: React.ReactNode
}
const Layout = (props: LayoutProps) => {
    return (
        <View>
            <NavBar />
            
            {props.children}
        </View>
    )
}

export default Layout;