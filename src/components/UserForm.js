import React, { Component } from 'react'
import PropTypes from 'prop-types'

class UserForm extends Component {
    static contextTypes = {
        dict: PropTypes.object
    };

    handleChange = ev => {
        const {value} = ev.target
        this.props.onChange(value)
    }

    render() {
        return (
            <div>
                {this.context.dict.userName}: <input value = {this.props.value} onChange = {this.handleChange} />
            </div>
        )
    }
}

export default UserForm