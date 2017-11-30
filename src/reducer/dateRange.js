import {SET_FILTER_DATES} from "../constants"

export default (dateRange = {from: null, to: null}, action) =>
{
    const {type, payload} = action

    if (type === SET_FILTER_DATES) {
        dateRange = payload
    }

    return dateRange
}



