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
} from "../actions/actionType";


const usersState = {
    loading : false,
    data : [],
    error : ""
}
const addUserState = {
    loading : false,
    data : [],
    error : ""
}

const deleteUserState = {
    loading : false,
    data : [],
    error : ""
}

const editUserState = {
    loading : false,
    data : [],
    error : ""
}

export function users(state = usersState, action){
    switch(action.type){
        case FETCH_USERS_REQUEST : 
        return {
            ...state,
            loading : true
        }

        case FETCH_USERS_SUCCESS : 
        return {
            ...state,
            loading : false,
            data : action.payload
        }

        case FETCH_USERS_ERROR : 
        return {
            ...state,
            loading : false,
            error : action.payload
        }

        default : 
        return state
    }
}

export function addUser(state = addUserState, action){
    switch(action.type){
        case ADD_USER_REQUEST : 
        return {
            ...state,
            loading : true
        }

        case ADD_USER_SUCCESS : 
        return {
            ...state,
            loading : false,
            data : action.payload
        }

        case ADD_USER_ERROR : 
        return {
            ...state,
            loading : false,
            error : action.payload
        }

        default : 
        return state
    }
}


export function deleteUser(state = deleteUserState, action){
    switch(action.type){
        case DELETE_USER_REQUEST : 
        return {
            ...state,
            loading : true
        }

        case DELETE_USER_SUCCESS : 
        return {
            ...state,
            loading : false,
            data : action.payload
        }

        case DELETE_USER_ERROR : 
        return {
            ...state,
            loading : false,
            error : action.payload
        }

        default : 
        return state
    }
}


export function editUser(state = editUserState, action){
    switch(action.type){
        case EDIT_USER_REQUEST : 
        return {
            ...state,
            loading : true
        }

        case EDIT_USER_SUCCESS : 
        return {
            ...state,
            loading : false,
            data : action.payload
        }

        case EDIT_USER_ERROR : 
        return {
            ...state,
            loading : false,
            error : action.payload
        }

        default : 
        return state
    }
}
