import React, { Component, Fragment } from 'react'
import MenuItem from './MenuItem'
import PropTypes from 'prop-types'

//console.log('---', React.Fragment)
class Menu extends Component {
    static contextTypes = {
        dict: PropTypes.object
    };

    render() {
        return (
            <Fragment>
                <h2>{this.context.dict.mainMenu}:</h2>
                {this.props.children}
            </Fragment>
        )
    }
}

export {MenuItem}
export default Menu