import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Dialogs_styles/Dialogs.css"

const DialogItem = (props) => {
    return (
    <div className="dialog-item active"><NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink></div>
    )
}

const MessageItem = (props) => {
    return <div className="message-item">{props.message}</div>
}

const Dialogs = (props) => {

    let dialogsElem = props.messagesPage.dialogs.map ((d) => (<DialogItem name = {d.name} key = {d.id} id = {d.id}/>));
    let messagesElem = props.messagesPage.messages.map ((m) => (<MessageItem message = {m.message} key = {m.id} id = {m.id}/>))
    //let newMessage = props.store.getMassiveData().newMessageBody;
    let newMessage = props.messagesPage.newMessageBody;


    let buttonSendMessage = () => {
        props.sendMessage();
      }

      let changeNewMessage = (e) => {
        let body = e.target.value
        props.updateNewMessage(body)
      }


    return (
        <div className="dialogs">
            <div className="dialogs-list">
                {dialogsElem}
            </div>

            <div className="messages-list">
                {messagesElem}
                <div>
                    <div>
                        <textarea value = {newMessage} onChange={changeNewMessage}></textarea>
                    </div>
                    <div>
                        <button onClick={buttonSendMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
