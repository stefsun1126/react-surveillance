import {
    ADD_EVENT_DATA,
    SELECTED_ITEM_ID,
    CREATE_LAYOUTS,
    DRAG_IMG,
    DOUBLE_CLICK_MAIN_CONTENT_ITEM,
    RESET_EVENT_DATAS,
    RESET_SELECTED_ITEM
} from './action-type'

// add event data
export const addEventData = (selectedID) => (
    {
        type: ADD_EVENT_DATA, data: selectedID
    }
)

// reset event data
export const resetEventDatas = () => (
    {
        type: RESET_EVENT_DATAS
    }
)

// reset selected item
export const resetSelectedItem = () => (
    {
        type: RESET_SELECTED_ITEM
    }
)

// selected item 
export const selectedItemID = (item_info) => (
    {
        type: SELECTED_ITEM_ID,
        data: item_info
    }
)


export const createLayouts = (info) => (
    {
        type: CREATE_LAYOUTS,
        data: {
            scope: info.scope
        }
    }
)

export const dropImg = (info) => (
    {
        type: DRAG_IMG,
        data: {
            url: info.url,
            dataID: info.dataID,
            itemID: info.itemID,
            dataName: info.dataName
        }
    }
)

export const doubleClickMainContentItem = (info) => (
    {
        type: DOUBLE_CLICK_MAIN_CONTENT_ITEM,
        data: {
            itemID: info.itemID,
        }
    }
)






