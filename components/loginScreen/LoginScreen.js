import React from "react";
import { StyleSheet, View, Image, Text, TextInput, Pressable } from "react-native";
import { login } from "../../API/ApiRequest";
import R from "../../assets/theme/R";
import { screens } from "../../navigation/RouteItem";

const password = '#j3apZAYBAm@Q4T2C!dQa'
const email = 'test-tech-dp-api_front@gmail.com'
const emailNecessaryWord = '@'

class LoginScreen extends React.Component {

    constructor(props) {
        super(props)
        this.email = email
        this.password = password
        this.state = {
            isPasswordError: false,
            isEmailError: false
        }
    }

    render() {
        const { navigation } = this.props
        return (
            <View style={styles.mainContainer}>
                {this._displayDigitalPacaLogo()}
                {this._displayEmailAndPasswordTextInput()}
                <Pressable
                    style={styles.submitButton}
                    onPress={() => this._onSubmit(navigation)}
                    backgroundColor={R.colors.secondaryVariant}
                    accessibilityLabel={R.strings.submitLabel}
                >
                    <Text style={styles.buttonText}>
                        {R.strings.submitButtonText}
                    </Text>
                </Pressable>
            </View>
        )
    }

    //ui------------------------------------------------------------------------------------
    _displayDigitalPacaLogo() {
        return (
            <View style={styles.logoWhiteCircle}>
                <Image
                    source={R.images.digitalPacaLogo}
                    style={styles.digitalPacaLogo}
                />
            </View>
        )
    }

    _displayEmailAndPasswordTextInput() {
        return (
            <View>
                <Text style={styles.loginTitle}> {R.strings.connect}</Text>
                <TextInput
                    placeholder={R.strings.email}
                    style={styles.textInput}
                    onChangeText={(text) => this._onEmailChange(text)}
                />
                {this._displayIsEmailError()}
                <TextInput
                    placeholder={R.strings.password}
                    style={styles.textInput}
                    onChangeText={(text) => this._onPasswordChange(text)}
                />
                {this._displayIsPasswordError()}
            </View>
        )
    }

    _displayIsEmailError() {
        if (this.state.isEmailError) {
            return (
                <View>
                    <Text style={styles.errorMessage} >
                        {R.strings.emailErrorMessage}
                    </Text>
                </View>
            )
        }
    }
    _displayIsPasswordError() {
        if (this.state.isPasswordError) {
            return (
                <View>
                    <Text style={styles.errorMessage}>
                        {R.strings.passwordErrorMessage}
                    </Text>
                </View>
            )
        }
    }

    //event----------------------------------------------------------------------
    _onEmailChange(email) { this.email = email }
    _onPasswordChange(password) { this.password = password }
    _onSubmit(navigation) {
        //check if email contain '@'
        this.setState(() => {
            if (this.email.includes(emailNecessaryWord)) return { isEmailError: false }
            else return { isEmailError: true }
        })
        //check password
        this.setState(() => {
            if (this.password == password) return { isPasswordError: false }
            else return { isPasswordError: true }
        })
        //if email and password are good navigate to detail
        if (this.email == email && this.password == password) {
            navigation.navigate(screens.Home , {screen: screens.MovieList})
            login(this.email,this.password).then(response=> console.log(response))
        }
    }

}


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: R.colors.secondary,
        alignItems: 'center'
    },
    errorMessage: {
        ...R.typography.body2, ... {
            color: R.colors.onError,
            textAlign: 'center'
        }
    },

    loginTitle: {
        ...R.typography.h1, ... {
            margin: 5,
            color: R.colors.onSecondary,
        }
    },
    submitButton: {
        marginTop: 150,
        borderRadius: 10,
        paddingTop: 15,
        paddingBottom: 15,
        paddingStart: 40,
        paddingEnd: 40
    },

    buttonText: {
        ...R.typography.h1, ...{
            color: R.colors.onSecondary
        }
    },

    textInput: {
        backgroundColor: R.colors.primary,
        paddingTop: 5,
        paddingBottom: 5,
        textAlign: 'center',
        borderRadius: 7,
        margin: 5,
        width: 300
    },

    logoWhiteCircle: {
        width: 170,
        height: 170,
        backgroundColor: R.colors.primary,
        borderRadius: 85,
        marginTop: 150,
        marginBottom: 10
    },

    digitalPacaLogo: {
        width: 110,
        height: 130,
        margin: 30,
        marginTop: 20,
    }
})

export default LoginScreen