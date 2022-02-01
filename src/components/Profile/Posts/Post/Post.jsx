import React from 'react';
import "./Post.css"

const Post = (props) => {
    return (<div className="content-post">
      <div className = "post-item">
        <img className = "post-ava" src="https://html5css.ru/howto/img_avatar.png" alt="post-img" />
        <div className = "post-text">{props.message}</div>
        <button className = "post-button-like">Likes: {props.likesCount}</button>
      </div>
  </div>)
}

export default Post;
