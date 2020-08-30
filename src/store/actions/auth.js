import * as actionTypes from './actionTypes';

export const authStart = () => {
    return{
        type: actionTypes.AUTH_START
    }
}


export const authSuccess = (data) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: data.token,
        status: data.status,
        message: data.message
    }
}

export const authFail = (error) => {
    return {
        type:actionTypes.AUTH_FAILURE,
        error: error.code,
        status: error.status,
        message: error.message
    }
}
 
export const authReset = () => {
    return {
        type:actionTypes.AUTH_RESET,
    }
}
export const auth = (email, password) => {
    return dispatch => {
        dispatch(authStart());

        if(email === 'admin@gmail.com' && password === '123456'){
            setTimeout(function(){
                let data = {
                    token: 'tkn121212',
                    status: 'success',
                    message: 'Loggedin successfully!..'
                }
                dispatch(authSuccess(data));
                dispatch(authReset());
            },5000);
        }else{
            setTimeout(function(){
                let error = {
                    code: 401,
                    status: 'failed',
                    message: 'Check your username or password!.'
                }
                dispatch(authFail(error));
                dispatch(authReset());
            },5000);
        }
        
    }
}