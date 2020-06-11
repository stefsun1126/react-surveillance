import React, { Component } from 'react'

import Button from './../basis/button.jsx'

export default class Header extends Component {

    render() {
        const { click_main_btn_scope, content_double_click_false, doubleClickWhole } = this.props

        return (
            <div className="main__header" >
                <Button className="button--grow" onClicks={[click_main_btn_scope, content_double_click_false]} params={[1, doubleClickWhole]}>1</Button>
                <Button className="button--grow" onClicks={[click_main_btn_scope, content_double_click_false]} params={[4, doubleClickWhole]}>4</Button>
                <Button className="button--grow" onClicks={[click_main_btn_scope, content_double_click_false]} params={[9, doubleClickWhole]}>9</Button>
                <Button className="button--grow" onClicks={[click_main_btn_scope, content_double_click_false]} params={[16, doubleClickWhole]}>16</Button>
            </div>
        )
    }
}   