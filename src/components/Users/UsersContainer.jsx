//import React from "react";
import { connect } from "react-redux";
import { FollowAC, SetUsersAC, UnfollowAC } from "../../redux/users_Reducer";
import Users from "./Users";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch (FollowAC(userId));
        },
        unfollow: (userId) => {
            dispatch (UnfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch (SetUsersAC(users));
        },
    }
}


export default connect (mapStateToProps, mapDispatchToProps) (Users);
