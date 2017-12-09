import {ADD_COMMENT} from '../constants'
import {normalizedComments} from '../fixtures'
import {Record} from 'immutable'
import {arrToMap, arrToImmutableMap} from './utils'

const CommentRecord = Record({
    id: null,
    user: null,
    text: null
})

const commentsRecord = arrToImmutableMap(normalizedComments, CommentRecord)

export default (state = commentsRecord, action) => {
    const {type, payload, randomId} = action

    switch (type) {
        case ADD_COMMENT:
            return state.set(randomId, new CommentRecord(payload.comment))
    }

    return state
}