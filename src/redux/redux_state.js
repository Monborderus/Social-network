import { combineReducers, createStore } from "redux";
import profileReducer from "./profile_Reducer";
import dialogsReducer from "./dialogs_Reducer";
import usersReducer from "./users_Reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    usersPage: usersReducer,
});

let store = createStore(reducers);

export default store;
