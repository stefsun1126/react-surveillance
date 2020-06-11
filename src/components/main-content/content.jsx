import React, { Component } from 'react'

import { addClass, ON_DROP, ON_DOUBLE_ONCLICK } from './../../generic.js'

export default class Content extends Component {
    constructor(props) {
        super(props)

        this.img = []
        this.className = 'main__content__scope'
        this.id = ''
        this.name = ''

        // 只有這個 component 要用 
        this.state = {
            url: '',
            isDoubleClick: false
        }
    }

    // when start drag
    handleOnStart = (e) => {
        e.dataTransfer.setData('id', this.id)
        e.dataTransfer.setData('name', this.name)
    }


    // when at target scope
    handleOnOver = (e) => {
        e.dataTransfer.effectAllowed = 'move'
        e.preventDefault();
    }

    // when drop
    handleOnDrop = (e) => {
        const { add_event_data } = this.props
        this.id = e.dataTransfer.getData('id')
        this.name = e.dataTransfer.getData('name')

        this.setState({
            url: e.dataTransfer.getData('url'),
        })

        // add even list
        add_event_data({
            id: this.id,
            name: this.name,
            event: ON_DROP
        })
    }

    // when end drag
    handleOnEnd = (e) => {
        this.setState({
            url: '',
        })

    }


    // when double click
    handleOnDoubleClick = (e) => {
        const { isDoubleClick } = this.state
        const { content_double_click_true, add_event_data } = this.props

        this.setState({
            isDoubleClick: !isDoubleClick
        })
        content_double_click_true(isDoubleClick)

        // add even list
        add_event_data({
            id: this.id,
            name: this.name,
            event: ON_DOUBLE_ONCLICK
        })
    }

    // 兩個狀態最後應該要是一致的
    componentDidUpdate = () => {
        const { isDoubleClick } = this.state
        const { doubleClickWhole } = this.props
        if (doubleClickWhole === false && isDoubleClick === true) {
            this.setState({
                isDoubleClick: false
            })
        }
    }

    render() {
        const { scope, doubleClickWhole } = this.props
        const { url, isDoubleClick } = this.state

        // class 
        let className = ''
        const originClass = this.className
        const col1 = `main__content__scope--col1`
        const col4 = `main__content__scope--col4`
        const col9 = `main__content__scope--col9`
        const col16 = `main__content__scope--col16`

        switch (scope) {
            case 1:
                className = addClass(originClass, col1)
                break;
            case 4:
                className = addClass(originClass, col4)
                break;
            case 9:
                className = addClass(originClass, col9)
                break;
            case 16:
                className = addClass(originClass, col16)
                break;
            default:
                className = addClass(originClass, col1)
                break;
        }

        // attach class
        let attachClassName = 'main__content__scope main__content__scope--full'

        // img
        let img = ''
        if (url.length > 0) {
            img =
                <img
                    id={this.id}
                    name={this.name}
                    className="main__content__scope__img"
                    src={url}
                    alt="device_img"
                    onDragStart={this.handleOnStart}
                    onDragEnd={this.handleOnEnd}
                />
        }
        return (
            <div
                id={this.id}
                name={this.name}
                className={(isDoubleClick === true && doubleClickWhole === true) ? attachClassName : className}
                onDragOver={this.handleOnOver}
                onDrop={this.handleOnDrop}
                onDoubleClick={() => this.handleOnDoubleClick(this.id)}
            >
                {img}
            </div>
        )
    }
}