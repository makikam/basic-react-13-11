import {ADD_ARTICLE_COMMENT} from '../constants'
import {normalizedComments as defaultComments} from '../fixtures'

const commentsMap = defaultComments.reduce((acc, comment) => ({
    ...acc,
    [comment.id]: comment
}), {})

export default (state = commentsMap, action) => {
    const {type, payload, response, error} = action
    switch (type) {
        case ADD_ARTICLE_COMMENT:
            const {comment} = action.payload
            return Object.assign(state, {
                [comment.id]: {
                    id: comment.id,
                    user: comment.user,
                    text: comment.text
                }
            })
    }

    return state
}