import React, { Component } from 'react'

import { addClass } from '../../generic.js'


export default class Button extends Component {

    handleOnClick = () => {
        const { onClicks, params } = this.props
        if (onClicks.length > 0) {
            onClicks.map((onClick, index) => onClick(params[index]))
        }
    }

    render() {
        // origin class name
        let buttonClass = 'button'
        const { className, children } = this.props
        // add class
        if (className) {
            buttonClass = addClass(buttonClass, className)
        }
        return (
            <button className={buttonClass} onClick={this.handleOnClick}>{children}</button>
        )
    }
}