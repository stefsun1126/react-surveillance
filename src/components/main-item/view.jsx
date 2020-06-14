import React, { Component } from 'react'

import { ON_DROP, isUndefined, addClass } from './../../generic.js'

export default class Item extends Component {

    // when start drag
    handleOnStart = (e, dataID, dataName, itemID) => {
        e.dataTransfer.setData('id', dataID)
        e.dataTransfer.setData('name', dataName)
        e.dataTransfer.setData('dragItemID', itemID)
    }

    // when at target scope
    handleOnOver = (e) => {
        e.preventDefault();
    }

    // when drop
    handleOnDrop = (e, itemID) => {
        const url = e.dataTransfer.getData('url')
        const dataID = e.dataTransfer.getData('id')
        const dataName = e.dataTransfer.getData('name')
        const dragItemID = e.dataTransfer.getData('dragItemID')
        const { addEventData, dropImg } = this.props

        // cant not drop self 
        // only img drag has dragItemID
        if (!isUndefined(dragItemID) && dragItemID.length > 0) {
            if (itemID === dragItemID * 1) {
                return
            }
        }

        dropImg({
            url: url,
            dataID: dataID,
            itemID: itemID,
            dataName: dataName
        })

        if (!isUndefined(dragItemID) && dragItemID.length > 0) {
            // change state info
            dropImg({
                url: '',
                dataID: '',
                itemID: dragItemID,
                dataName: ''
            })
        }

        // add even list
        addEventData({
            id: dataID,
            name: dataName,
            event: ON_DROP
        })
    }

    render() {
        const { itemID, className, url, doubleClickMainContentItem, dataID, dataName, selectedItem, selectedItemID } = this.props
        let newClassName = className

        if (selectedItem.length > 0 && dataID === selectedItem) {
            newClassName = addClass(newClassName, 'main__content__item--selected')
        }
        // img
        let img = ''
        if (!isUndefined(url) && url.length > 0) {
            img =
                <img
                    className="main__content__item__img"
                    src={url} alt="itemImg"
                    onDragStart={(event) => this.handleOnStart(event, dataID, dataName, itemID)}
                />
        }

        return (
            <div
                itemID={itemID}
                className={newClassName}
                onDragOver={this.handleOnOver}
                onDrop={(event) => this.handleOnDrop(event, itemID)}
                onClick={() => selectedItemID(dataID)}
                onDoubleClick={() => doubleClickMainContentItem({ itemID })}
            >
                {img}
            </div>
        )
    }
}