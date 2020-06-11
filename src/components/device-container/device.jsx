import React, { Component } from 'react'

import datas from './device.json'
import Tree from '../device-tree/tree'

export default class Device extends Component {

    render() {
        const { selectedItem } = this.props
        return (
            <div className="device">
                <h1 className="device__title">Devices</h1>
                <div className="device__treeView">
                    {
                        datas.map((data) => (
                            <Tree key={data.id} data={data} selectedItem={selectedItem} />
                        ))
                    }
                </div>
            </div>
        )
    }
}
