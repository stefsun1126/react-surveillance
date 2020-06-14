import { combineReducers } from 'redux'
import { addClass, isUndefined } from './../generic'

import {
    ADD_EVENT_DATA,
    SELECTED_ITEM_ID,
    CREATE_LAYOUTS,
    DRAG_IMG,
    DOUBLE_CLICK_MAIN_CONTENT_ITEM,
    RESET_EVENT_DATAS,
    RESET_SELECTED_ITEM
} from './action-type'

// action
// {
//     scope : 4,
//     dataID: '',
//     dataName: 
// }

const mainLayouts = (state = [
    {
        itemID: 0,
        className: 'main__content__item main__content__item--col1',
        dataID: '',
        dataName: '',
        url: '',
        isFull: false,
        scope: 1
    }
], action) => {
    switch (action.type) {
        //// click btn switch layout
        case CREATE_LAYOUTS:
            // class
            const originClassName = 'main__content__item'
            let newClassName = ''
            const col1 = `${originClassName}--col1`
            const col4 = `${originClassName}--col4`
            const col9 = `${originClassName}--col9`
            const col16 = `${originClassName}--col16`

            switch (action.data.scope) {
                case 1:
                    newClassName = addClass(originClassName, col1)
                    break;
                case 4:
                    newClassName = addClass(originClassName, col4)
                    break;
                case 9:
                    newClassName = addClass(originClassName, col9)
                    break;
                case 16:
                    newClassName = addClass(originClassName, col16)
                    break;
                case 'reset':
                    return [
                        {
                            itemID: 0,
                            className: 'main__content__item main__content__item--col1',
                            dataID: '',
                            dataName: '',
                            url: '',
                            isFull: false,
                            scope: 1
                        }
                    ]
                default:
                    newClassName = addClass(originClassName, col1)
                    break;
            }

            let layouts = []
            for (let i = 0; i < action.data.scope; i++) {
                if (!isUndefined(state[i]) && !isUndefined(state[i].url) && state[i].url.length > 0) {
                    state[i].className = newClassName
                    // wash if double click not collapse
                    state[i].scope = action.data.scope
                    state[i].isFull = false
                    layouts.push(state[i])
                } else {
                    layouts.push({
                        itemID: i,
                        className: newClassName,
                        dataID: '',
                        dataName: '',
                        url: '',
                        isFull: false,
                        scope: action.data.scope
                    })
                }
            }
            return layouts

        //// drag img to main content item
        case DRAG_IMG:
            // changed target info
            {
                let targetItem = state.find(x => x.itemID === action.data.itemID * 1)
                targetItem.url = action.data.url
                targetItem.dataID = action.data.dataID
                targetItem.dataName = action.data.dataName
                // deep clone
                let slice = state.slice(0, state.length)
                slice.splice(targetItem.itemID, 1, targetItem)
                return slice
            }
        //// double click main content item let target item full
        case DOUBLE_CLICK_MAIN_CONTENT_ITEM:
            {
                // target item
                let targetItem = state.find(x => x.itemID === action.data.itemID)
                // blank item can not be full
                if (isUndefined(targetItem.url) || targetItem.url.length === 0) {
                    return state
                }
                targetItem.isFull = !targetItem.isFull
                // class
                const originClassName = 'main__content__item'
                if (!targetItem.isFull) {
                    let newClassName = ''
                    const col1 = `${originClassName}--col1`
                    const col4 = `${originClassName}--col4`
                    const col9 = `${originClassName}--col9`
                    const col16 = `${originClassName}--col16`
                    switch (targetItem.scope) {
                        case 1:
                            newClassName = addClass(originClassName, col1)
                            break;
                        case 4:
                            newClassName = addClass(originClassName, col4)
                            break;
                        case 9:
                            newClassName = addClass(originClassName, col9)
                            break;
                        case 16:
                            newClassName = addClass(originClassName, col16)
                            break;
                        default:
                            newClassName = addClass(originClassName, col1)
                            break;
                    }
                    targetItem.className = newClassName
                } else {
                    targetItem.className = addClass(originClassName, `${originClassName}--full`)
                }

                // deep clone
                let slice = state.slice(0, state.length)
                slice.splice(targetItem.itemID, 1, targetItem)
                return slice
            }
        default:
            return state
    }
}

const selectedItem = (state = '', action) => {
    switch (action.type) {
        case SELECTED_ITEM_ID:
            return action.data

        case RESET_SELECTED_ITEM:
            return ''

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

        case RESET_EVENT_DATAS:
            return []

        default:
            return state;
    }
}



// 可以將整個 reducer 合併一起暴露
// state 的結構
const reducers = combineReducers({
    // 屬性名 : 值
    mainLayouts,
    eventDatas,
    selectedItem
})


export default reducers


