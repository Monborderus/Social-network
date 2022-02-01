const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST = "UPDATE-NEW-POST";

let initialState = {
    posts: [
        { id: 1, message: "Hey, yo, one thing", likesCount: 12 },
        { id: 2, message: "I don't know why", likesCount: 1 },
        { id: 3, message: "It doesn't matter how hard you try", likesCount: 20 },
        { id: 4, message: "All I know", likesCount: 102 },],

    updatedPost: 'asdasd',
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = { id: 5, message: state.updatedPost, likesCount: 0 }
            return {
                ...state,
                posts: [...state.posts, newPost],
                updatedPost: "",
            }

        case UPDATE_NEW_POST: {
            return {
                ...state,
                updatedPost: action.newMesage,
            }
        }
        default:
            return state;

    }
}

export let actionCreatorAddPost = () => {
    return ({ type: ADD_POST })
}

export let actionCreatorUpdareNewPost = (text) => {
    return ({ type: UPDATE_NEW_POST, newMesage: text })
}

export default profileReducer;
