import { combineReducers } from "redux";
import { users, addUser, deleteUser } from "./reducer";

const rootReducer = combineReducers({
    users,
    addUser,
    deleteUser
})

export default rootReducer;