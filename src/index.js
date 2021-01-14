import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import "../src/css/index.css"

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
)
