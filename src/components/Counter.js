import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {increment} from '../AC'

class Counter extends Component {
    static contextTypes = {
        dict: PropTypes.object
    };

    render() {
        return (
            <div>
                <h1>{this.props.count}</h1>
                <button onClick = {this.onClick}>{this.context.dict.incrementMe}</button>
            </div>
        )
    }

    onClick = () => {
        this.props.handleIncrement()
    }
}

const mapStateToProps = (state) => ({
    count: state.counter
})

export default connect(mapStateToProps, {
    handleIncrement: increment
})(Counter)