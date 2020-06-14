import { connect } from 'react-redux'
import { selectedItemID } from './../../redux/action'
import View from './view'

const List = connect(
    // mapStateToprops 
    (state) => (
        {
            eventDatas: state.eventDatas,
            selectedItem: state.selectedItem
        }
    ),
    // mapDispatchToProps 
    {
        selectedItemID
    }
)(View)

export default List