import React, { Component } from 'react';

import Device from './components/device-container/device.jsx'
import Main from './components/main-container/main.jsx'
import Event from './components/event-container/event.jsx'
import './App.scss'


export default class App extends Component {

    render() {
        const {
            eventDatas,
            add_event_data,
            selectedItem,
            selected_item_id,
            unselected_item_id
        } = this.props

        return (
            <div className="app">
                <Device selectedItem={selectedItem} />
                <Main add_event_data={add_event_data} />
                <Event
                    eventDatas={eventDatas}
                    selectedItem={selectedItem}
                    selected_item_id={selected_item_id}
                    unselected_item_id={unselected_item_id}
                />
            </div>
        );
    }
}

