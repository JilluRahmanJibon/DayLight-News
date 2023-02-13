import { combineReducers } from "redux";
import authReducer from "./authReducer";
import chatReducer from "./chatReducer";


export const reducers = combineReducers({ authReducer, chatReducer })