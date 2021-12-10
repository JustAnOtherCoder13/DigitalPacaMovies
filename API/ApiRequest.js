const baseUrl = 'http://138.68.104.234:8080/auth/login'

const base64 = require('base-64')

//create async call
export async function login(email, password){
    //fetch result with post method
    let result = await fetch( baseUrl,{
        method : 'POST',
        headers : {
            //Authorisation basic for email/password, as in documentation, have to encode base 64
            'Authorization' : 'Basic ' + base64.encode(email + ":" + password),
            'Accept': 'application/json',
            //content type must be urlencoded
            'Content-Type': 'application/x-www-form-urlencoded',
        },body: JSON.stringify({
            //pass needed params
            email : email,
            password :base64.encode(password),
            'grant_type' : 'client_credentials'
        })
    });
    result = await result.json();
    return result
}