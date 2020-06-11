import { combineReducers } from 'redux'

import {
    CLICK_MAIN_BUTTON_SCOPE,
    CONTNET_DOUBLE_CLICK_FALSE,
    CONTNET_DOUBLE_CLICK_TURE,
    ADD_EVENT_DATA,
    SELECTED_ITEM_ID,
    UNSELECTED_ITEM_ID
} from './action-type'

// 要在 main 生出幾個 content
const scope = (state = 1, action) => {
    switch (action.type) {
        case CLICK_MAIN_BUTTON_SCOPE:
            return action.data
        default:
            return state;
    }
}

// main content 要有自己的 isDoubleClick state
// 但也需要一個額外的 isDoubleClick state ,讓其他組件在一些情況下可以影響 main content 的 isDoubleClick state
// 例如在 scope4 時 , 把某一 content 放大 , 再點選 scope9 時 , 因為 main content 自己的 isDoubleClick state 還是在打開的狀態 , 導致切換到 scope9 時 , 原來圖片還是放大的
const doubleClickWhole = (state = true, action) => {
    switch (action.type) {
        case CONTNET_DOUBLE_CLICK_FALSE:
            if (action.data === true) {
                return !action.data
            }
            return state
        case CONTNET_DOUBLE_CLICK_TURE:
            if (action.data === false) {
                return !action.data
            }
            return state
        default:
            return state;
    }
}

// state = {
//     id: 'aa',
//     name: 'AA',
//     event: 'Onclick'
// }
const eventDatas = (state = [], action) => {
    switch (action.type) {
        case ADD_EVENT_DATA:
            return [...state, action.data]

        default:
            return state;
    }
}

const selectedItem = (state = { selectedID: '', isSelected: false }, action) => {
    switch (action.type) {
        case SELECTED_ITEM_ID:
            state = {
                selectedID: action.data,
                isSelected: !state.isSelected
            }
            return state
        case UNSELECTED_ITEM_ID:
            state = {
                selectedID: '',
                isSelected: false
            }
            return state
        default:
            return state;
    }
}


// 可以將整個 reducer 合併一起暴露
// state 的結構
// { scope: 1 }
const reducers = combineReducers({
    // 屬性名 : 值
    scope,
    doubleClickWhole,
    eventDatas,
    selectedItem
})


export default reducers


