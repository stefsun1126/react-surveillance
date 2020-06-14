import React, { Component } from 'react';

import Device from './components/device-container/device.jsx'
import Main from './components/main-container/main.jsx'
import Event from './components/event-container/event.jsx'
import './App.scss'


export default class App extends Component {

    render() {
        return (
            <div className="app">
                <Device  />
                <Main  />
                <Event />
            </div>
        );
    }
}