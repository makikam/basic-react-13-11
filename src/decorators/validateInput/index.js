import React from 'react'
import './style.css'
import PropTypes from 'prop-types'


export default (Input) => class ValidateInput extends React.Component {
    static defaultProps = {
        minLength: 10,
        maxLength: 100,
        errCSSClass: 'error',
        okCSSClass: ''
    }


    state = {
        value: '',
        className: ''
    }

    PropTypes = {
        valChange : PropTypes.func.isRequired
    }


    handleInputChange = e => {
        const val = e.target.value

        if ((val.length >= this.props.minLength) && (this.state.className !== ''))
            this.setState({className: this.props.okCSSClass})

        if ((this.props.maxLength !== 0) && (val.length > this.props.maxLength)) return false

        this.setState({value: val})
        this.props.valChange(val)
    }


    handleInputBlur = e => {
        if (e.target.value.length < this.props.minLength) {
            this.setState({className: this.props.errCSSClass})
        }
    }


    render() {
        return (
            <Input {...this.props} {...this.state} val = {this.state.value} cName = {this.state.className}
                   onChange = {this.handleInputChange} onBlur = {this.handleInputBlur}/>
        )
    }


}