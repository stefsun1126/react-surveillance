import {
    CLICK_MAIN_BUTTON_SCOPE,
    CONTNET_DOUBLE_CLICK_FALSE,
    CONTNET_DOUBLE_CLICK_TURE,
    ADD_EVENT_DATA,
    SELECTED_ITEM_ID,
    UNSELECTED_ITEM_ID
} from './action-type'

// for main__header__button call
export const click_main_btn_scope = (number) => (
    {
        type: CLICK_MAIN_BUTTON_SCOPE,
        data: number
    }
)

// for main__header__button call
export const content_double_click_false = (isDoubleClick) => (
    {
        type: CONTNET_DOUBLE_CLICK_FALSE,
        data: isDoubleClick
    }
)

// for main__content doubleClick call
export const content_double_click_true = (isDoubleClick) => (
    {
        type: CONTNET_DOUBLE_CLICK_TURE,
        data: isDoubleClick
    }
)

// add event data
export const add_event_data = (evenData) => (
    {
        type: ADD_EVENT_DATA, data: evenData
    }
)


// selected item 
export const selected_item_id = (item_info) => (
    {
        type: SELECTED_ITEM_ID,
        data: item_info
    }
)


// unselected item 
export const unselected_item_id = () => (
    {
        type: UNSELECTED_ITEM_ID
    }
)

