import {INCREMENT, DELETE_ARTICLE, SET_FILTER_DATES, SET_ARTICLES_FILTER} from '../constants'

export function increment() {
    const action = { type: INCREMENT }
    return action
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function setDateRange(dRange) {
    return {
        type: SET_FILTER_DATES,
        payload: dRange
    }

}

export function setArticlesFilter(id) {
    return {
        type: SET_ARTICLES_FILTER,
        payload: id
    }
}