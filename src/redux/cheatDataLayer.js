import dialogsReducer from "./dialogs_Reducer";
import profileReducer from "./profile_Reducer";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST = "UPDATE-NEW-POST";
const UPDATE_NEW_MESSAGE = "UPDATE_NEW_MESSAGE";
const SEND_MESSAGE = "SEND_MESSAGE";

let store = {
    _listenChecker() {

    },

    _massiveData: {
        messagesPage: {
            dialogs: [
                { id: 1, name: "Amogus" },
                { id: 2, name: "Aboba" },
                { id: 3, name: "Gefestus" },
                { id: 4, name: "Napoleonus" },
                { id: 5, name: "Adolfus" },],

            messages: [
                { id: 1, message: "Hey, yo, one thing" },
                { id: 2, message: "I don't know why" },
                { id: 3, message: "It doesn't matter how hard you try" },
                { id: 4, message: "Keep that in mind, I designed this rhyme" },
                { id: 5, message: "All I know" },],
        },
        newMessageBody: "",

        profilePage: {
            posts: [
                { id: 1, message: "Hey, yo, one thing", likesCount: 12 },
                { id: 2, message: "I don't know why", likesCount: 1 },
                { id: 3, message: "It doesn't matter how hard you try", likesCount: 20 },
                { id: 4, message: "All I know", likesCount: 102 },],

            updatedPost: 'asdasd',
        }
    },
    getMassiveData() {
        return this._massiveData
    },

    dispatch(action) {

        this._massiveData.profilePage = profileReducer(this._massiveData.profilePage, action);
        this._massiveData.messagesPage = dialogsReducer(this._massiveData.messagesPage, action);
        this._listenChecker(this._massiveData);

        /* if (action.type === ADD_POST) {
            let newPost = { id: 5, message: this._massiveData.profilePage.updatedPost, likesCount: 0 }
            this._massiveData.profilePage.posts.push(newPost);
            this._massiveData.profilePage.updatedPost = "";
            this._listenChecker(this._massiveData);
        }
        else if (action.type === UPDATE_NEW_POST) {
            this._massiveData.profilePage.updatedPost = action.newMesage;
            this._listenChecker(this._massiveData);
        }
        else if (action.type === UPDATE_NEW_MESSAGE) {
            this._massiveData.messagesPage.newMessageBody = action.body;
            this._listenChecker(this._massiveData);
        }
        else if (action.type === SEND_MESSAGE) {
            let body = this._massiveData.messagesPage.newMessageBody;
            this._massiveData.messagesPage.newMessageBody = "";
            this._massiveData.messagesPage.messages.push({ id: 6, message: body })
            this._listenChecker(this._massiveData);
        } */
    },

    checkerFunction(observer) {
        this._listenChecker = observer;
    }
}

export let actionCreatorAddPost = () => {
    return ({ type: ADD_POST })
}

export let actionCreatorUpdareNewPost = (text) => {
    return ({ type: UPDATE_NEW_POST, newMesage: text })
}

export let sendMessageCreator = () => {
    return ({ type: SEND_MESSAGE })
}

export let updateNewMessageCreator = (body) => {
    return ({ type: UPDATE_NEW_MESSAGE, body: body })
}

export default store;
window.store = store;
