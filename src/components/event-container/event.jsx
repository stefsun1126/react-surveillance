import React, { Component } from 'react'

import Header from './../event-header/header'
import List from './../event-list/list'

export default class Event extends Component {
    render() {
        const {
            eventDatas,
            selectedItem,
            selected_item_id,
            unselected_item_id
        } = this.props

        return (
            <div className="event">
                <Header />
                <List
                    eventDatas={eventDatas}
                    selectedItem={selectedItem}
                    selected_item_id={selected_item_id}
                    unselected_item_id={unselected_item_id}
                />
            </div>
        )
    }
}