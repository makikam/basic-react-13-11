import {Record} from 'immutable'
import {
    DELETE_ARTICLE, ADD_COMMENT, LOAD_ALL_ARTICLES, LOAD_ARTICLE, START, SUCCESS,
    LOAD_COMMENTS_FOR_ARTICLE
} from '../constants'
import {arrToImmutableMap} from './utils'

const ArticleRecord = Record({
    id: null,
    title: '',
    text: null,
    date: null,
    loading: false,
    comments: [],
    commentsLoading: false,
    commentsLoaded: false
})

const ReducerRecord = Record({
    entities: arrToImmutableMap([], ArticleRecord),
    loading: false,
    loaded: false,
    error: null
})


export default (articles = new ReducerRecord(), action) => {
    const { type, payload, randomId, response } = action

    switch (type) {
        case DELETE_ARTICLE:
            return articles.deleteIn(['entities', payload.id])

        case ADD_COMMENT:
            return articles.updateIn(['entities', payload.articleId, 'comments'], comments => comments.concat(randomId))

        case LOAD_ALL_ARTICLES + START:
            return articles.set('loading', true)

        case LOAD_ALL_ARTICLES + SUCCESS:
            return articles
                .set('loading', false)
                .set('entities', arrToImmutableMap(response, ArticleRecord))

        case LOAD_ARTICLE + START:
            return articles.setIn(['entities', payload.id, 'loading'], true)

        case LOAD_ARTICLE + SUCCESS:
            return articles
                .setIn(['entities', payload.id], new ArticleRecord(payload.response))

        case LOAD_COMMENTS_FOR_ARTICLE + START:
            return articles.setIn(['entities', payload.id, 'commentsLoading'], true)

        case LOAD_COMMENTS_FOR_ARTICLE + SUCCESS:
            return articles.setIn(['entities', payload.id, 'commentsLoaded'], true).
            setIn(['entities', payload.id, 'commentsLoading'], false)
    }

    return articles
}