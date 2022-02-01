import React from 'react';
import Post from './Post/Post';
import "./Posts.css"

const Posts = (props) => {

    let postsElem = props.posts.map ((p) => ( <Post message = {p.message} likesCount = {p.likesCount} id = {p.id}/>))

    let newPostElem = React.createRef();

    let buttonNewPost = () => {
      //let text = newPostElem.current.value;
      // props.updateNewPost('')
      props.addPost();
    }

    let changeNewPost = () => {
      let text = newPostElem.current.value;
      props.onPostChange(text);
    }

    return (<div className="main-content-posts">
      <div className = "my-posts">
       <div className = "my-post-text">My Posts</div>
        <div className = "my-post-enter">
        <textarea onChange = {changeNewPost} value = {props.newPostText} ref = {newPostElem} className = "my-post-textarea"
        cols="70" rows="6" placeholder = "Write something on this Page..."></textarea>
        <button onClick = {buttonNewPost} className = "my-posts-submit">Submit</button>
        </div>
      </div>
      <div className = "palytsa"></div>
      {postsElem}
  </div>)
}

export default Posts;
