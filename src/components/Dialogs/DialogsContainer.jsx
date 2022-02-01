import { connect } from 'react-redux';
import { sendMessageCreator, updateNewMessageCreator } from '../../redux/dialogs_Reducer';
import Dialogs from './Dialogs';


/* const DialogsContainer = (props) => { */

    /* let state = store.getState().messagesPage;

    let buttonSendMessage = () => {
        store.dispatch(sendMessageCreator())
      }

      let changeNewMessage = (body) => {
        store.dispatch(updateNewMessageCreator(body))
      }

      return <Dialogs sendMessage = {buttonSendMessage}
      updateNewMessage = {changeNewMessage}
      messagesPage = {state}/> */

      /* return (<StoreContext.Consumer>
      {  (store) => {
      let state = store.getState().messagesPage;

      let buttonSendMessage = () => {
        store.dispatch(sendMessageCreator())
      }

      let changeNewMessage = (body) => {
        store.dispatch(updateNewMessageCreator(body))
      }

      return <Dialogs sendMessage = {buttonSendMessage}
      updateNewMessage = {changeNewMessage}
      messagesPage = {state}/>
    }
  }
</StoreContext.Consumer>)
} */



let mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageCreator())},
      updateNewMessage: (body) => {
       dispatch(updateNewMessageCreator(body))
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;
