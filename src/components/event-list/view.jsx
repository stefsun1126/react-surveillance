import React, { Component } from 'react'
import Item from './../event-item/item.jsx'

export default class List extends Component {
    render() {
        const {
            selectedItem,
            eventDatas,
            selectedItemID
        } = this.props
        return (
            <ul className="event__list">
                {
                    eventDatas.map((eventData, index) => (
                        <Item
                            key={index}
                            eventData={eventData}
                            selectedItem={selectedItem}
                            selectedItemID={selectedItemID}
                        />
                    ))
                }
            </ul>
        )
    }
}