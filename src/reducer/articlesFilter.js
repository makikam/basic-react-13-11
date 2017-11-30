import {SET_ARTICLES_FILTER} from "../constants"

export default (articlesFilter = [], action) => {
    const {type, payload} = action
    if (type === SET_ARTICLES_FILTER) {
        articlesFilter = payload
    }

    return articlesFilter
}