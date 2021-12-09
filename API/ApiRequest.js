const password = '#j3apZAYBAm@Q4T2C!dQa'
const email = 'test-tech-dp-api_front@gmail.com'
const baseUrl = 'http://138.68.104.234:8080/auth/login?grant_type=client_credentials'

const base64 = require('base-64')

export async function login(){
    let result = await fetch( baseUrl,{
        method : 'POST',
        headers : {
            'Authorization' : 'Basic ' + base64.encode(email + ":" + password),
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
        },body: JSON.stringify({
            email : email,
            password :base64.encode(password)
        })
    });
    result = await result.json();
    return result
}