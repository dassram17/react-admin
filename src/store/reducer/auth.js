//import * as actionTypes from '../actions/actionTypes';
import { updatedObject } from '../utility';
//import { auth } from '../actions';

const initialState = {
    token: null,
    error:null,
    message: null,
    status: null,
    loading: false
}

const authStart = (state, action ) => {
    return updatedObject(state, {token: null, error: null, message: null, status:null, loading: true });
}
const authSuccess = (state, action ) => {
    return updatedObject(state, {token: action.token, message: action.message, error: null, loading: false, status: action.status });
}
const authFail = (state, action ) => {
    return updatedObject(state, {error: action.error, message: action.message, loading: false, status: action.status });
}
const authReset = (state, action ) => {
    return updatedObject(state, {token: null, error: null, message: null, status:null, loading: false });
}
const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'AUTH_START': return authStart(state, action);
        case 'AUTH_SUCCESS': return authSuccess(state, action);
        case 'AUTH_FAILURE': return authFail(state, action);
        case 'AUTH_RESET': return authReset(state, action);
        default:
            return state;
    }
}

export default reducer;