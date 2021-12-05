import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

class LoginScreen extends React.Component {

    render(){
        return(
            <View style = {styles.container}>
               {this._displayDigitalPacaLogo()}
                <Text>
                    {"Se Connecter :"}
                </Text>
                
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

}

const styles = StyleSheet.create( {
    container : {
        flex : 1,
        backgroundColor : '#03A9F4',
    },

    logoWhiteCircle : {
        width : 190,
        height : 190,
        backgroundColor : 'white',
        borderRadius : 95,
        marginTop : 150,
        marginBottom : 50
    },


    digitalPacaLogo:{
        width : 110,
        height : 130,
        margin : 40,
        resizeMode : "cover",
    }
})

export default LoginScreen