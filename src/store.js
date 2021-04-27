import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { testReducer1 } from "./reducers/testReducers"

const reducer = combineReducers({
    test: testReducer1
})

const testDataFromStorage = localStorage.getItem("test") ? JSON.parse(localStorage.getItem("test")) : []

const initialState = {
    test: testDataFromStorage
}
const middleware = [thunk]

const store = createStore(reducer, initialState+  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), composeWithDevTools(applyMiddleware(...middleware)))

export default store