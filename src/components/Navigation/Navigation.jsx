import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Navigation_styles/Navigation.css"

const Navigation = () => {
    return (<nav className="navigation">
    <div className = "nav-elem"><NavLink className = "nav-link" to="/profile">Profile</NavLink></div>
    <div className = "nav-elem"><NavLink className = "nav-link" to="/dialogs">Messages</NavLink></div>
    <div className = "nav-elem"><NavLink className = "nav-link" to="/users">Users</NavLink></div>
    <div className = "nav-elem"><NavLink className = "nav-link" to="/news">News</NavLink></div>
    <div className = "nav-elem"><NavLink className = "nav-link" to="/music">Music</NavLink></div>
    <div className = "nav-elem"><NavLink className = "nav-link" to="/settings">Settings</NavLink></div>
  </nav>)
}

export default Navigation;
