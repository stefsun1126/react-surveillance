import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducers from './reducer'

let store = createStore(
    reducers,
    composeWithDevTools()
)

export default store