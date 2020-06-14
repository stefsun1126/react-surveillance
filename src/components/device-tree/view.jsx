import React, { Component } from 'react'

import { addClass } from './../../generic.js'

export default class Tree extends Component {
    constructor(props) {
        super(props)

        this.state = {
            collapsed: false
        }
    }

    handleArrowOnClick = () => {
        this.setState({ collapsed: !this.state.collapsed })
    }

    // when start drag
    handleOnStart = (e, url, id, name) => {
        e.dataTransfer.setData('url', url)
        e.dataTransfer.setData('id', id)
        e.dataTransfer.setData('name', name)
    }

    render() {
        const { data, selectedItem, selectedItemID } = this.props
        // origin class
        let nodeChildClass = 'device__treeView__treeNode__child'
        let arrowClass = "treeNode__arrow"
        // addtional class
        let nodeCollapsedClass = "device__treeView__treeNode--collapsed"
        let arrowCollapsedClass = "treeNode__arrow--collapsed"

        // collapsed
        if (this.state.collapsed) {
            nodeChildClass = addClass(nodeChildClass, nodeCollapsedClass)
            arrowClass = addClass(arrowClass, arrowCollapsedClass)
        }

        // text class
        let textClass = 'device__treeView__treeNode__text'
        if (selectedItem === data.id) {
            textClass = addClass(textClass, `${textClass}--selected`)
        }

        // sub
        let subs = data.subOptions
        if (subs.length > 0) {
            // folder can not drag
            return (
                <div className="device__treeView__treeNode">
                    <div className={arrowClass} onClick={this.handleArrowOnClick}>▾</div>
                    <span
                        className={textClass}
                        data-id={data.id}
                        draggable="false"
                    >
                        {data.name}
                    </span>
                    <div className={nodeChildClass}>
                        {
                            subs.map((sub) => (
                                <Tree key={sub.id} data={sub} selectedItem={selectedItem} selectedItemID={selectedItemID} />
                            ))
                        }
                    </div>
                </div>
            )
        } else {
            return (
                <div className="device__treeView__treeLeaf">
                    <span
                        className={textClass}
                        data-id={data.id}
                        draggable="true"
                        onClick={() => selectedItemID(data.id)}
                        onDragStart={(event) => this.handleOnStart(event, data.url, data.id, data.name)}
                    >
                        {data.name}
                    </span>
                </div>
            )
        }

    }
}