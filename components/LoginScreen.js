import React from "react";
import { StyleSheet, View, Image, Text, TextInput } from "react-native";
import R from "../assets/theme/R";

class LoginScreen extends React.Component {
    render(){
        return(
            <View style = {styles.mainContainer}>
               {this._displayDigitalPacaLogo()}
               {this._displayEmailAndPasswordTextInput()}
            </View>
        )
    }

    _displayDigitalPacaLogo (){
        return(
            <View style = {styles.logoWhiteCircle}>
                <Image
                    source = {R.images.digitalPacaLogo}
                    style = {styles.digitalPacaLogo}
                />
            </View>
        )
    }
    _displayEmailAndPasswordTextInput (){
        return(
            <View>
                <Text style = {styles.loginTitle}>
                    {R.strings.connect}
                </Text>
                <TextInput
                    placeholder = {R.strings.email}
                    style = {styles.textInput}
                />
                <TextInput
                    placeholder = {R.strings.password}
                    style = {styles.textInput}
                />
            </View>
        )
    }

}

const styles = StyleSheet.create( {
    mainContainer : {
        flex : 1,
        backgroundColor : R.colors.secondary,
        alignItems : 'center'
    },
    loginTitle :{...R.typography.h1, ... {
        margin : 5,
        color : R.colors.onSecondary,
    }},
    textInput : {
        backgroundColor : R.colors.primary,
        paddingTop : 5,
        paddingBottom : 5,
        textAlign : 'center',
        borderRadius : 7,
        margin : 5,
        width : 300
    },

    logoWhiteCircle : {
        width : 170,
        height : 170,
        backgroundColor : R.colors.primary,
        borderRadius : 85,
        marginTop : 150,
        marginBottom : 10
    },

    digitalPacaLogo:{
        width : 110,
        height : 130,
        margin : 30,
        marginTop : 20,
           }
})

export default LoginScreen