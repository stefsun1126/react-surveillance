import React, { Component } from 'react'
export default class Arrow extends Component {
    render() {
        const { className, onClick } = this.props
        
        return (
            <div
                className={className}
                onClick={onClick}>
                ▾
            </div>
        )
    }
}