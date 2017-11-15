const initialState = {
    authData: {},
    isLoggedIn: false
}


export function auth(state = initialState, action) {
    console.log('authd', action.authData);
    switch(action.type) {
        case 'LOGIN_SUCCESS':
            return {...state,
                authData: action.authData,
                isLoggedIn: true
            }

        case 'LOGOUT_SUCCESS':
            return {...state,
                authData: action.authData,
                isLoggedIn: false
            }

        default:
            return state;
    }
}