import { add_event_data, selected_item_id, unselected_item_id } from './redux/action.js'
import { connect } from 'react-redux'

import View from './view'


const App = connect(
  // mapStateToprops 
  (state) => (
    {
      eventDatas: state.eventDatas,
      selectedItem: state.selectedItem
    }
  ),
  // mapDispatchToProps 
  {
    add_event_data,
    selected_item_id,
    unselected_item_id
  }
)(View)

export default App