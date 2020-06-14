import { connect } from 'react-redux'
import { selectedItemID } from './../../redux/action'
import View from './view'

const Tree = connect(
    // mapStateToprops 
    (state) => (
        {
            selectedItem: state.selectedItem
        }
    ),
    // mapDispatchToProps 
    {
        selectedItemID
    }
)(View)

export default Tree