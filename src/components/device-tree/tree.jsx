import React, { Component } from 'react'

import { addClass } from './../../generic.js'
import Arrow from './../device-arrow/arrow'

export default class Tree extends Component {
    constructor(props) {
        super(props)

        this.state = {
            collapsed: false
        }
    }

    handleOnClick = () => {
        this.setState({ collapsed: !this.state.collapsed })
    }

    // when start drag
    handle_start = (e, url, id, name) => {
        e.dataTransfer.setData('url', url)
        e.dataTransfer.setData('id', id)
        e.dataTransfer.setData('name', name)
    }

    render() {
        const { data, selectedItem } = this.props
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

        //text class
        let textClass = 'device__treeView__treeNode__text'

        if (selectedItem.selectedID === data.id && selectedItem.isSelected === true) {
            textClass = addClass(textClass, `${textClass}--selected`)
        }

        // sub
        let subs = data.subOptions
        if (subs.length > 0) {
            // debugger
            return (
                <div className="device__treeView__treeNode">
                    <Arrow className={arrowClass} onClick={this.handleOnClick} />
                    <span
                        className={textClass}
                        data-id={data.id}
                        draggable="true"
                        onDragStart={(event) => this.handle_start(event, data.url, data.id, data.name)}
                    >
                        {data.name}
                    </span>
                    <div className={nodeChildClass}>
                        {
                            subs.map((sub) => (
                                <Tree key={sub.id} data={sub} selectedItem={selectedItem}/>
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
                        onDragStart={(event) => this.handle_start(event, data.url, data.id, data.name)}
                    >
                        {data.name}
                    </span>
                </div>
            )
        }

    }
}