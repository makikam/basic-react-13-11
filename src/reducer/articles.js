import {DELETE_ARTICLE} from '../constants'
import {normalizedArticles as defaultArticles} from '../fixtures'

/*const articlesMap = {}
defaultArticles.forEach(article => articlesMap[article.id] = article)*/
const articlesMap = defaultArticles.reduce((acc, article) => ({
    ...acc,
    [article.id] : article
}), {})

export default (articlesState = articlesMap, action) => {
    const {type, payload} = action


    switch (type) {
        case DELETE_ARTICLE:
            const result = Object.assign({}, articlesMap)
            delete result[payload.id]
            return result
            //return articlesState.filter(article => article.id !== payload.id)
    }

    return articlesState
}