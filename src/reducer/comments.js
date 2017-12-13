import {ADD_COMMENT, LOAD_ARTICLE_COMMENTS, LOAD_FLAT_LIST_COMMENTS, SUCCESS} from '../constants'
import {arrToMap} from './utils'
import {Map, OrderedMap, Record} from 'immutable'

const CommentRecord = Record({
    id: null,
    text: null,
    user: null,
    sn: null
})

const CommentSnToIdRecord = Record({
    sn: null,
    id: null
})

const ReducerState = Record({
    entities: new OrderedMap({}),
    MapSnToId: new Map({}),
    commentsCount: null
})


export default (state = new ReducerState(), action) => {
    const {type, payload, response, randomId} = action

    switch (type) {
        case ADD_COMMENT:
            const NewComment=new CommentRecord({...payload.comment, id: randomId})
            return state.setIn(['entities', randomId], NewComment)
                .setIn(['commentsCount'], state.getIn(['commentsCount'])+1)
                .setIn(['MapSnToId'], NewComment)

        case LOAD_ARTICLE_COMMENTS + SUCCESS:
            return state.mergeIn(['entities'], arrToMap(response, CommentRecord))

        case LOAD_FLAT_LIST_COMMENTS + SUCCESS:
            const addMapSnToId = action.response.records.reduce((acc, itm, idx) =>
                acc.set((idx + payload.offset), itm.id), Map())
            const addMapEntities = arrToMap(response.records, CommentRecord)

            return state.mergeIn(['MapSnToId'], addMapSnToId)
                .mergeIn(['entities'], addMapEntities)
                .setIn(['commentsCount'], response.total)

    }

    return state
}