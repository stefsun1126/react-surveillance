import React, { Component } from 'react'
import { addClass } from './../../generic'

export default class Item extends Component {
    constructor(props) {
        super(props)
        this.className = 'event__list__item'
    }

    // select id
    handleOnClick = (id) => {
        const { selected_item_id, selectedItem, unselected_item_id } = this.props
        if (selectedItem.isSelected === false) {
            // 新增選取
            selected_item_id(id)
        } else {
            // 刪除選取
            unselected_item_id()
        }


    }

    render() {
        const { eventData, selectedItem } = this.props
        // class name
        if (selectedItem.selectedID === eventData.id && selectedItem.isSelected === true) {
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

