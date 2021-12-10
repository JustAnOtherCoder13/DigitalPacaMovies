import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import React from "react";
import LoginScreen from "../components/loginScreen/LoginScreen";
import MovieListScreen from "../components/movieListScreen/MovieListScreen";
import { Navigation } from "../navigation/Navigation";
import R from "../assets/theme/R";
import { IconButton } from "react-native-paper";
import { View, Image, StyleSheet, Text } from "react-native";
import { screens } from "./RouteItem";

const Drawer = createDrawerNavigator();

class DrawerNavigation extends React.Component {
    render() {
        return (
            <Drawer.Navigator
                initialRouteName={screens.Login}
                //use custom drawer
                drawerContent={(props) => <CustomDrawer {...props} />}
            >

                <Drawer.Screen name={screens.Home} component={
                    //pass stack navigation to navigate beetween screens
                    Navigation
                } options={{
                    headerShown: false,
                    drawerActiveBackgroundColor: R.colors.secondaryVariant,
                    drawerLabelStyle: styles.drawerItemText,
                    drawerIcon: (focused) => (
                        <IconButton
                            icon={R.images.homeIcon}
                            color={focused ? R.colors.onSecondary : R.colors.secondaryVariant}
                        />
                    )
                }} />
                <Drawer.Screen name={screens.Favorite} component={MovieListScreen} options={{
                    headerShown: false,
                    drawerActiveBackgroundColor: R.colors.secondaryVariant,
                    drawerLabelStyle: styles.drawerItemText,
                    drawerIcon: (focused) => (
                        <IconButton
                            icon={R.images.starOutlinedIcon}
                            color={focused ? R.colors.onSecondary : R.colors.secondaryVariant}
                        />
                    )
                }} />
                <Drawer.Screen name={screens.Login} component={LoginScreen} options={{
                    headerShown: false,
                    drawerActiveBackgroundColor: R.colors.secondaryVariant,
                    drawerLabelStyle: styles.drawerItemText,
                    drawerIcon: (focused) => (
                        <IconButton
                            icon={R.images.mailReplyIcon}
                            color={focused ? R.colors.onSecondary : R.colors.secondaryVariant}
                        />
                    )
                }} />

            </Drawer.Navigator>
        )
    }
}

function CustomDrawer(props) {
    return <DrawerContentScrollView{...props}
        contentContainerStyle={styles.drawerContainer}>

        <View style={styles.mainContainer}>
            {displayDigitalPacaLogo()}
            <Text style={styles.menuTitle}> {R.strings.menu}</Text>
            {displayCloseIcon(props)}
        </View>
        <DrawerItemList {...props} />
    </DrawerContentScrollView>


    function displayCloseIcon(props) {
        return <IconButton
            icon={R.images.closeIcon}
            color={R.colors.onSecondary}
            onPress={() => props.navigation.closeDrawer()} />;
    }

    function displayDigitalPacaLogo() {
        return <View style={styles.logoWhiteCircle}>
            <Image
                source={R.images.digitalPacaLogo}
                style={styles.digitalPacaLogo} />
        </View>;
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
    drawerItem: {

    }
})

export default DrawerNavigation