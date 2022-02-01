import { connect } from 'react-redux';
import { actionCreatorAddPost, actionCreatorUpdareNewPost } from '../../../redux/profile_Reducer';
import Posts from './Posts';

/* const PostsContainer = (props) => { */

  /* let state = props.store.getState();

    let buttonNewPost = () => {
      props.store.dispatch(actionCreatorAddPost())
    }

    let changeNewPost = (text) => {
      let action = actionCreatorUpdareNewPost(text)
      props.store.dispatch(action);
    }

    return <Posts addPost = {buttonNewPost}
    onPostChange = {changeNewPost}
    posts = {state.profilePage.posts}
    newPostText = {state.profilePage.updatedPost}/> */

    /* return (<StoreContext.Consumer>
      { (store) => {
        let state = store.getState();

        let buttonNewPost = () => {
          store.dispatch(actionCreatorAddPost())
        }

        let changeNewPost = (text) => {
          let action = actionCreatorUpdareNewPost(text)
          store.dispatch(action);
        }
        return <Posts addPost = {buttonNewPost}
          onPostChange = {changeNewPost}
          posts = {state.profilePage.posts}
          newPostText = {state.profilePage.updatedPost}/>
        }
  }
    </StoreContext.Consumer>)
} */

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.updatedPost,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
       dispatch(actionCreatorAddPost())
    },
    onPostChange: (text) => {
      let action = actionCreatorUpdareNewPost(text)
          dispatch(action);
    }
  }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer;
