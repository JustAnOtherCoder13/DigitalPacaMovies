import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import React from "react";
import LoginScreen from "../loginScreen/LoginScreen";
import MovieListScreen from "../movieListScreen/MovieListScreen";
import { Navigation } from "../../navigation/Navigation";
import { View, Image, StyleSheet, Text } from "react-native";
import R from "../../assets/theme/R";
import { IconButton } from "react-native-paper";

const Drawer = createDrawerNavigator();

function CustomDrawer(props) {
    return <DrawerContentScrollView{...props}
        contentContainerStyle={styles.drawerContainer}
    >
        <View style={styles.mainContainer}>

            <View style={styles.logoWhiteCircle}>
                <Image
                    source={R.images.digitalPacaLogo}
                    style={styles.digitalPacaLogo}
                />
            </View>
            <Text style={styles.menuTitle}>
                Menu
            </Text>
            <IconButton
                icon={R.images.closeIcon}
                color={R.colors.onSecondary}
                onPress={() => props.navigation.closeDrawer()}
            />
        </View>
        <DrawerItemList {...props} />
    </DrawerContentScrollView>

}
class DrawerMenu extends React.Component {
    render() {
        return (
            <Drawer.Navigator
                initialRouteName="Login"
                drawerContent={(props) => <CustomDrawer {...props} />}

            >
                <Drawer.Screen name="Home" component={Navigation} options={{
                    headerShown: false,
                    drawerActiveBackgroundColor: R.colors.secondaryVariant,
                    drawerLabelStyle: styles.drawerItemText,
                    drawerItemStyle : styles.drawerItem  ,
                    drawerIcon: (focused) => (
                        <IconButton
                            icon={R.images.homeIcon}
                            color={focused? R.colors.onSecondary : R.colors.secondaryVariant}
                        />
                    )
                }} />
                <Drawer.Screen name="Favoris" component={MovieListScreen} options={{
                    headerShown: false,
                    drawerActiveBackgroundColor: R.colors.secondaryVariant,
                    drawerLabelStyle: styles.drawerItemText,
                    drawerIcon: () => (
                        <IconButton
                            icon={R.images.starOutlinedIcon}
                            color={R.colors.onSecondary}
                        />
                    )
                }} />
                <Drawer.Screen name="Deconnexion" component={LoginScreen} options={{
                    headerShown: false,
                    drawerActiveBackgroundColor: R.colors.secondaryVariant,
                    drawerLabelStyle: styles.drawerItemText,
                    drawerIcon: () => (
                        <IconButton
                            icon={R.images.mailReplyIcon}
                            color={R.colors.onSecondary}
                        />
                    )
                }} />

            </Drawer.Navigator>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-evenly'

    },
    drawerContainer: {
        flex: 1,
        backgroundColor: R.colors.secondary,
    },
    digitalPacaLogo: {
        width: 55,
        height: 65,
        margin: 15,
        marginTop: 10,
    },
    logoWhiteCircle: {
        width: 85,
        height: 85,
        backgroundColor: R.colors.primary,
        borderRadius: 42.5,
        marginBottom: 40,
        marginTop: 40
    },
    menuTitle: {
        ...R.typography.h1, ...{
            color: R.colors.onSecondary
        },
    },
    drawerItemText: {
        ...R.typography.h3, ...{
            color: R.colors.onSecondary

        }
    },
    drawerItem:{
        
    }
})

export default DrawerMenu