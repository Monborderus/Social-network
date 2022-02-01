import { Route } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import UsersContainer from './components/Users/UsersContainer';


function App(props) {
  return (
    <div className="app">
      <Header />
      <Navigation />
      <div className="main-content">
        <Route path="/dialogs" render={() => <DialogsContainer /* store={props.store} */ /*dispatch={props.dispatch} data={props.data.messagesPage}*/ />} />
        <Route path="/profile" render={() => <Profile /* store={props.store} */
          /* data={props.data.profilePage}
          dispatch={props.dispatch} */ />} />
        <Route path="/users" render={() => <UsersContainer />} />
      </div>
    </div>
  );
}

export default App;
