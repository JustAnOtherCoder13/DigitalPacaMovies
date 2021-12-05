import React from "react";
import { StyleSheet, View, Image, Text, TextInput } from "react-native";

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
                    source = {require('../assets/DigitalPACA-Logo_Round_poulpe-en-haut.png')}
                    style = {styles.digitalPacaLogo}
                />
            </View>
        )
    }
    _displayEmailAndPasswordTextInput (){
        return(
            <View>
                <Text style = {styles.loginTitle}>
                    {"Se Connecter :"}
                </Text>
                <TextInput
                    placeholder = 'Adresse email'
                    style = {styles.textInput}
                />
                <TextInput
                    placeholder = 'Mot de passe'
                    style = {styles.textInput}
                />
            </View>
        )
    }

}

const styles = StyleSheet.create( {
    mainContainer : {
        flex : 1,
        backgroundColor : '#03A9F4'
    },
    loginTitle : {
        margin : 5
    },
    textInput : {
        backgroundColor : 'white',
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
        backgroundColor : 'white',
        borderRadius : 85,
        marginTop : 150,
        marginBottom : 10
    },

    digitalPacaLogo:{
        width : 110,
        height : 130,
        margin : 30,
        marginTop : 20,
        resizeMode : "cover",
    }
})

export default LoginScreen