import React from 'react';
import PostsContainer from './Posts/PostsContainer';
import "./Profile_styles/Profile.css"

const Profile = (props) => {
    return (
    <div /* className = "main-content" */>
    <img className = "content-top-img" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/technology-linkedin-background-template-design-5ddf7265984fb7980eedccd4a9cff879_screen.jpg?ts=1597995925" alt="main-img" />
    <div className="content-profile">
      <img className = "profile-img" src="https://www.blexar.com/avatar.png" alt="profile-logo" />
      <div className = "profile-info">
        <span className = "profile-name">Vasya Popov</span>
          <div className = "profile-info-box">
            <span className = "profile-info-elem">Date of bith:</span>
            <span className = "profile-info-elem">City:</span>
            <span className = "profile-info-elem">Education:</span>
            <span className = "profile-info-elem">About me:</span>
          </div>
      </div>
    </div>
      <PostsContainer /* store = {props.store} */
     /*  posts = {props.data.posts}
      dispatch = {props.dispatch}
      updatedPost = {props.data.updatedPost} *//>
  </div>)
}

export default Profile;
