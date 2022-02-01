import axios from "axios";
import React from "react";
import "./Users_styles.css";
import userPhoto from "./../../sources/user_img.png";

class Users extends React.Component {


        componentDidMount () {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(responce => {
            this.props.setUsers (responce.data.items)
        })

    }

    render () {
    return (<div>

        {
            this.props.users.map(u => <div className="user-container" key={u.id}>
                <div className="user-ava-follow">
                    <div>
                        <img className="user-ava-img" alt="ava-img" src={u.photos.small != null ? u.photos.small : userPhoto} />
                    </div>

                    <div className="user-follow">
                        {u.followed ? <button onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button>
                            : <button onClick={() => { this.props.follow(u.id) }}>Follow</button>}
                    </div>
                </div>
                <div>
                    <div>
                        <span>{u.name}</span>
                        <span>{u.status}</span>
                    </div>
                    <div>
                        <span>{"u.location.cityName" + ", " + "u.location.country"}</span>

                    </div>
                </div>

            </div>)
        }
    </div>)
    }
}

export default Users;
