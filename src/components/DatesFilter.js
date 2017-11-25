import React, {Component} from 'react'
import DayPicker, {DateUtils} from 'react-day-picker'
import 'react-day-picker/lib/style.css'


export default class DatesFilter extends Component {
    state = {
        selectedDates: {
            from: null,
            to: null
        }
    }

    render() {
        const {from, to} = this.state.selectedDates

        return (
            <div>
                <div>
                    <DayPicker onDayClick = {this.onDayClick} selectedDays = {this.state.selectedDates}/>
                </div>
                {from && from.getDate().toLocaleString()} {to && " - "} {to && to.toLocaleString()}
            </div>
        )
    }

    onDayClick = (day) => {
        this.setState({selectedDates: DateUtils.addDayToRange(day, this.state.selectedDates)})
    }
}