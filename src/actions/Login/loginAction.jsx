export function login(authData) {
    console.log('we are getting here---->>>>>>>>>>>', authData)
    // return {
    //     type: 'LOGIN_SUCCESS',
    //     authData
    // };
}

export function logout(authData) {
    return {
        type: 'LOGOUT_SUCCESS',
        authData
    };
}