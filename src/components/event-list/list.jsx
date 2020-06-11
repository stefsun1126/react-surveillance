import React, { Component } from 'react'
import Item from './../event-item/item.jsx'
export default class List extends Component {

    render() {
        const {
            eventDatas,
            selectedItem,
            selected_item_id,
            unselected_item_id
        } = this.props
        return (
            <ul className="event__list">
                {
                    eventDatas.map((eventData, index) => (
                        <Item
                            key={index}
                            eventData={eventData}
                            selected_item_id={selected_item_id}
                            selectedItem={selectedItem}
                            unselected_item_id={unselected_item_id}
                        />
                    ))
                }
            </ul>
        )
    }
}