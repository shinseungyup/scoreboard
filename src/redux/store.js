import {createStore} from 'redux'
import {allReducers} from './reducer'

export const store = createStore(allReducers,
    window.__REDUX__DEVTOOLS__EXTENSION__ && window.__REDEX__DEVTOOLS_EXTENSION__());