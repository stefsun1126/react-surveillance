import { connect } from 'react-redux'
import { createLayouts, doubleClickMainContentItem } from './../../redux/action'
import View from './view'

const Content = connect(
    // mapStateToprops 
    (state) => (
        {
            mainLayouts: state.mainLayouts,
        }
    ),
    // mapDispatchToProps 
    {
        createLayouts,
        doubleClickMainContentItem
    }
)(View)

export default Content