import {SET_ARTICLES_FILTER, SET_FILTER_DATES} from "../constants"
import articles from "./articles";

const articlesFilterInitialState = []


const dateRangeInitialState = {
    from: null,
    to: null
}


const articlesFilter = (state = articlesFilterInitialState, action) => {
    const {type, payload} = action

    if (type === SET_ARTICLES_FILTER)
        state = payload

    return state
}


const dateRange = (state = dateRangeInitialState, action) => {
    const {type, payload} = action

    if (type === SET_FILTER_DATES)
        state = payload

    return state
}


export {articlesFilter, dateRange}