
import { connect } from 'react-redux'
import { createLayouts, resetEventDatas, resetSelectedItem, dropImg } from './../../redux/action'

import View from './view'

const Header = connect(
    // mapStateToprops 
    () => ({}),
    // mapDispatchToProps 
    {
        createLayouts,
        resetEventDatas,
        resetSelectedItem,
        dropImg
    }
)(View)

export default Header