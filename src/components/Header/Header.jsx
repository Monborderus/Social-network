import React from 'react';
import styles from "./Header_styles/Header.module.css"
//import logo from './../../sources/Facebook_logo_(square).png';

const Header = () => {
    return (<header className = {styles.header}>
    {/*<img className="header-logo" src= {logo} alt="header-logo" />*/}

    <img className = {styles["header-logo"]} src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png" alt="header-logo"/>
  </header>)
}

export default Header;
