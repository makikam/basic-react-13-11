import {INCREMENT, DELETE_ARTICLE, CHANGE_DATE_RANGE, CHANGE_SELECTION, ADD_ARTICLE_COMMENT} from '../constants'

export function increment() {
    return {
        type: INCREMENT
    }
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function changeDateRange(dateRange) {
    return {
        type: CHANGE_DATE_RANGE,
        payload: { dateRange }
    }
}

export function changeSelection(selected) {
    return {
        type: CHANGE_SELECTION,
        payload: { selected }
    }
}

export function addCommentToArticle(articleId, comment) {
    console.log(`in AC`)
    console.dir(this)
    return {
        type: ADD_ARTICLE_COMMENT,
        payload: {
            articleId: articleId,
            comment: comment
        }
    }
}
