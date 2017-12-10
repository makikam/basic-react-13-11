import {ADD_COMMENT, LOAD_COMMENTS_FOR_ARTICLE, START, SUCCESS, FAIL} from '../constants'
import {normalizedComments} from '../fixtures'
import {Record} from 'immutable'
import {arrToImmutableMap} from './utils'

const CommentRecord = Record({
    id: null,
    user: null,
    text: null,
})

export default (state = new CommentRecord(), action) => {
    const {type, payload, randomId, response} = action

    switch (type) {
        case LOAD_COMMENTS_FOR_ARTICLE + SUCCESS:
            return arrToImmutableMap(response, CommentRecord).mergeWith(state)

        case ADD_COMMENT:
            return state.set(randomId, new CommentRecord(payload.comment))
    }

    return state
}