import reportWebVitals from './reportWebVitals';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
//import state, { checkerFunction } from "./cheatDataLayer"
//import { rerenderTree } from './rerender'
//import { addPost, updateNewPost } from './cheatDataLayer'
import store from "./redux/redux_state"
import { Provider } from 'react-redux';


/* let rerenderTree = (state) => { */
ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            {/* <StoreContext.Provider value={store}> */}
            <Provider store={store}>
                <App /* data={state} dispatch={store.dispatch.bind(store)} store={store} */ />
            </Provider>
            {/* </StoreContext.Provider> */}
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
/* }

rerenderTree(store.getState());

store.subscribe(() => {
    let state = store.getState()
    rerenderTree(state);
}); */

reportWebVitals();
