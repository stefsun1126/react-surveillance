import React, { Component } from 'react'

import Item from './../main-item/item'

export default class Content extends Component {
    render() {
        const { mainLayouts } = this.props

        return (
            <div className="main__content">
                {
                    mainLayouts.map((layout) => (
                        <Item
                            className={layout.className}
                            key={layout.itemID}
                            itemID={layout.itemID}
                            dataID={layout.dataID}
                            dataName={layout.dataName}
                            url={layout.url}
                        />
                    ))
                }
            </div>
        )
    }
}