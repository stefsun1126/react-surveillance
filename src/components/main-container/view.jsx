import React, { Component } from 'react'

import Header from './../main-header/header'
import Content from './../main-content/content'

export default class Main extends Component {

    render() {
        const {
            scope,
            click_main_btn_scope,
            content_double_click_false,
            content_double_click_true,
            doubleClickWhole,
            add_event_data
        } = this.props

        let contentArr = []
        for (let i = 1; i <= scope; i++) {
            contentArr.push(
                <Content
                    key={i}
                    scope={scope}
                    content_double_click_true={content_double_click_true}
                    doubleClickWhole={doubleClickWhole}
                    add_event_data={add_event_data}
                />)
        }

        return (
            <div className="main">
                <Header
                    click_main_btn_scope={click_main_btn_scope} 
                    content_double_click_false={content_double_click_false} 
                    doubleClickWhole={doubleClickWhole} />
                <div className="main__content">
                    {contentArr}
                </div>
            </div>
        )
    }
}