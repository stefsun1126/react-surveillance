import React, { Component } from 'react'

import Header from '../main-header/header'
import Content from '../main-content/content'

export default class Main extends Component {
    render() {
        return (
            <div className="main">
                <Header />
                <Content />
            </div>
        )
    }
}