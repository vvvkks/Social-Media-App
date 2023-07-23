import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux"
import messageReducer from "./messageReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk"
let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messageReducer,
    usersPage: usersReducer,
    auth: authReducer
});
let store = createStore(reducers, applyMiddleware(thunkMiddleware));
export default store;