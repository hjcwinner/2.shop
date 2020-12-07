import { createStore } from 'redux'
import reducer from './reducers/quan'

let store = createStore(reducer)

export default store