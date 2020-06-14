import React, { Component } from 'react'

import Button from './../basis/button.jsx'

export default class Header extends Component {

    handleOnClick = (scope) => {
        const { createLayouts, resetEventDatas, resetSelectedItem, dropImg } = this.props
        // reset main item
        createLayouts({ scope: scope })
        if (scope === 'reset') {
            // reset even liset
            resetEventDatas()
            // reset selected item
            resetSelectedItem()
            // reset img 
            dropImg({
                url: '',
                dataID: '',
                itemID: 0,
                dataName: ''
            })
        }
    }

    render() {
        return (
            <div className="main__header" >
                <Button className="button--grow" onClick={() => this.handleOnClick(1)}>1</Button>
                <Button className="button--grow" onClick={() => this.handleOnClick(4)}>4</Button>
                <Button className="button--grow" onClick={() => this.handleOnClick(9)}>9</Button>
                <Button className="button--grow" onClick={() => this.handleOnClick(16)}>16</Button>
                <Button className="button--grow" onClick={() => this.handleOnClick('reset')}>reset</Button>
            </div>
        )
    }
}   