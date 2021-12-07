import React from "react";
import { StyleSheet, View, Image, Text, TextInput, Pressable } from "react-native";
import R from "../../assets/theme/R";

class LoginScreen extends React.Component {

    constructor(props) {
        super(props)
        this.email = ''
        this.password = ''
        this.state = {
            isPasswordError: false,
            isEmailError: false
        }
    }

    //event
    _onEmailChange(email) { this.email = email }
    _onPasswordChange(password) { this.password = password }
    _onSubmit() {
        this.setState(() => {
            if (this.email == 'admin') return { isEmailError: false }
            else return { isEmailError: true }
        })
        this.setState(() => {
            if (this.password == '000000') return { isPasswordError: false }
            else return { isPasswordError: true }
        })
        if (this.email == 'admin' && this.password == '000000') {
            //nav to list
            console.log('navigate')
        }
    }


    render() {
        console.log('Render')
        return (
            <View style={styles.mainContainer}>
                {this._displayDigitalPacaLogo()}
                {this._displayEmailAndPasswordTextInput()}
            </View>
        )
    }

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
                <Text style={styles.loginTitle}>
                    {R.strings.connect}
                </Text>
                <TextInput
                    placeholder={R.strings.email}
                    style={styles.textInput}
                    onChangeText={(text) => this._onEmailChange(text)}//pass with event
                />
                {this._displayIsEmailError()}
                <TextInput
                    placeholder={R.strings.password}
                    style={styles.textInput}
                    onChangeText={(text) => this._onPasswordChange(text)}
                />
                {this._displayIsPasswordError()}

                <Pressable
                    style={styles.submitButton}
                    onPress={() => this._onSubmit()}
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

    _displayIsEmailError() {
        //pass with states
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
        marginLeft: 40,
        marginRight: 40
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