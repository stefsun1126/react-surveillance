import React, { Component } from 'react'
import { addClass } from './../../generic'

export default class Item extends Component {
    constructor(props) {
        super(props)
        this.className = 'event__list__item'
    }

    // select id
    handleOnClick = (id) => {
        const { selectedItemID} = this.props
        // 新增選取
        selectedItemID(id)
    }

    render() {
        const { eventData, selectedItem } = this.props
        // class name
        if (selectedItem === eventData.id) {
            this.className = addClass(this.className, `${this.className}--selected`)
        }else{
            this.className = 'event__list__item'
        }
        return (
            <li className={this.className} onClick={() => this.handleOnClick(eventData.id)}>
                {` [id]：${eventData.id} 　[name]：${eventData.name} 　[event]： ${eventData.event}`}
            </li>
        )
    }
}

