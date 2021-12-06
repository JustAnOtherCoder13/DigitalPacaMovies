import React from "react";
import { StyleSheet, View, Image, Text, TextInput, Pressable } from "react-native";
import R from "../assets/theme/R";

class LoginScreen extends React.Component {
    //state
    email = '';
    password = '';
    isPasswordError = true;
    isEmailError = false;
    //event
    _onEmailChange (email){this.email = email}
    _onPasswordChange (password) {this.password = password}
    _onSubmit(email, password){
        this.isEmailError = email=='admin'
        this.isPasswordError = password == '000000'
        if(!this.isEmailError && !this.isPasswordError){
            //nav to list
            console.log('navigate')
        }
    }

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
                    onChangeText ={(text)=> this._onEmailChange(text)}//pass with event
                />
                {this._displayIsEmailError(this.isEmailError)
                //pass with states
                }
                <TextInput
                    placeholder = {R.strings.password}
                    style = {styles.textInput}
                    onChangeText ={(text)=> this._onPasswordChange(text)}
                />
                {this._displayIsPasswordError(this.isPasswordError)
                //pass with states
            }

            <Pressable
            style = {styles.submitButton}
            onPress = {()=>this._onSubmit(this.email,this.password)}
            backgroundColor = {R.colors.secondaryVariant}
            accessibilityLabel = 'submit password and email'
            >
                <Text
                style = {styles.buttonText}
                >
                    Submit
                </Text>
            </Pressable>
            </View>
        )
    }
    _displayIsEmailError (isEmailError){
        //pass with states
        if(isEmailError){
        return(
            <View>
                <Text
                style = {styles.errorMessage}
                >
                    this email is unknown, please enter valid email
                </Text>
            </View>
        )}
    }
    _displayIsPasswordError (isPasswordError){
        if(isPasswordError){
            return(
                <View>
                    <Text
                    style = {styles.errorMessage}
                    >
                        invalid password, please try again
                    </Text>
                </View>
            )
        }
    }

}

const styles = StyleSheet.create( {
    mainContainer : {
        flex : 1,
        backgroundColor : R.colors.secondary,
        alignItems : 'center'
    },
    errorMessage :{...R.typography.body2, ... {
        color : R.colors.onError,
        textAlign : 'center'
    }},

    loginTitle :{...R.typography.h1, ... {
        margin : 5,
        color : R.colors.onSecondary,
    }},
    submitButton : {
        marginTop : 150,
        borderRadius : 10,
        paddingTop : 15,
        paddingBottom : 15,
        marginLeft: 40,
        marginRight: 40
    },

    buttonText : {...R.typography.h1, ...{
        color : R.colors.onSecondary
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