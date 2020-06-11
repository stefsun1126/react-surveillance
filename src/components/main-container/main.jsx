import { click_main_btn_scope, content_double_click_false, content_double_click_true } from './../../redux/action'
import { connect } from 'react-redux'

import View from './view'

const Main = connect(
    // mapStateToprops 
    (state) => (
        {
            scope: state.scope,
            doubleClickWhole: state.doubleClickWhole
        }
    ),
    // mapDispatchToProps 
    {
        click_main_btn_scope,
        content_double_click_false,
        content_double_click_true
    }
)(View)

export default Main