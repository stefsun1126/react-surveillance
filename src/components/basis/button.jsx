import React, { Component } from 'react'

import { addClass } from '../../generic.js'
import { withStyles } from '@material-ui/styles';

const styles = {
    root: {
        background: '#FF8E53',
        border: 0,
        borderRadius: 5,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 30,
        padding: '0 30px',
    },
    outlined:{
        border:'1px solid white'
    }
};

class Button extends Component {

    handleOnClick = () => {
        const { onClick } = this.props

        onClick()
    }

    render() {
        // origin class name
        let buttonClass = 'button'
        const { className, children, classes } = this.props
        // add class
        if (className) {
            buttonClass = addClass(buttonClass, className)
        }
        // add ui class
        buttonClass = addClass(buttonClass, classes.root)
        buttonClass = addClass(buttonClass, classes.outlined)

        return (
            <button className={buttonClass} onClick={this.handleOnClick}>{children}</button>
        )
    }
}

export default Button = withStyles(styles)(Button);