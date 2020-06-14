import React, { Component } from 'react'

import Header from './../event-header/header'
import List from './../event-list/list'

export default class Event extends Component {
    render() {
        return (
            <div className="event">
                <Header />
                <List />
            </div>
        )
    }
}