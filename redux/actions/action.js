import { 
    FETCH_USERS_REQUEST, 
    FETCH_USERS_SUCCESS, 
    FETCH_USERS_ERROR,

    ADD_USER_REQUEST,
    ADD_USER_SUCCESS,
    ADD_USER_ERROR,

    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    DELETE_USER_ERROR,

    EDIT_USER_REQUEST,
    EDIT_USER_SUCCESS,
    EDIT_USER_ERROR,
} from "./actionType"

export function fetchUserRequest(){
    return {
        type : FETCH_USERS_REQUEST
    }
}
export function fetchUserSuccess(data){
    console.log("GL : ",data);
    return {
        type : FETCH_USERS_SUCCESS,
        payload : data
    }
}
export function fetchUserError(err){
    return {
        type : FETCH_USERS_ERROR,
        payload : err
    }
}



export function addUserRequest(){
    return {
        type : ADD_USER_REQUEST
    }
}
export function addUserSuccess(data){
    console.log("GL : ",data);
    return {
        type : ADD_USER_SUCCESS,
        payload : data
    }
}
export function addUserError(err){
    return {
        type : ADD_USER_ERROR,
        payload : err
    }
}



export function deleteUserRequest(){
    return {
        type : DELETE_USER_REQUEST
    }
}
export function deleteUserSuccess(data){
    return {
        type : DELETE_USER_SUCCESS,
        payload : data
    }
}
export function deleteUserError(err){
    return {
        type : DELETE_USER_ERROR,
        payload : err
    }
}





export function editUserRequest(){
    return {
        type : EDIT_USER_REQUEST
    }
}
export function editUserSuccess(data){
    return {
        type : EDIT_USER_SUCCESS,
        payload : data
    }
}
export function editUserError(err){
    return {
        type : EDIT_USER_ERROR,
        payload : err
    }
}