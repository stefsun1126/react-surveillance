import { connect } from 'react-redux'
import { dropImg, doubleClickMainContentItem, addEventData, selectedItemID } from './../../redux/action'
import View from './view'

const Item = connect(
    // mapStateToprops 
    (state) => ({
        selectedItem: state.selectedItem
    }),
    // mapDispatchToProps 
    {
        dropImg,
        doubleClickMainContentItem,
        addEventData,
        selectedItemID
    }
)(View)

export default Item
