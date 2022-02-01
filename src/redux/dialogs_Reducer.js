const UPDATE_NEW_MESSAGE = "UPDATE_NEW_MESSAGE";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
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
    newMessageBody: "",
}

const dialogsReducer = (state = initialState, action) => {


    switch (action.type) {
        case UPDATE_NEW_MESSAGE:
            return {
                ...state,
                newMessageBody: action.body,
            };

        case SEND_MESSAGE: {
            let body = state.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, { id: 6, message: body }],
                newMessageBody: "",
            };
        }
        default:
            return state;
    }
}

export let sendMessageCreator = () => {
    return ({ type: SEND_MESSAGE })
}

export let updateNewMessageCreator = (body) => {
    return ({ type: UPDATE_NEW_MESSAGE, body: body })
}

export default dialogsReducer;
