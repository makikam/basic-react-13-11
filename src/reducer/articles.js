import {ADD_ARTICLE_COMMENT, DELETE_ARTICLE} from '../constants'
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
            const withDeletedArticle = Object.assign({}, articlesMap)
            delete withDeletedArticle[payload.id]
            return withDeletedArticle

        case ADD_ARTICLE_COMMENT:
            const addedComment = Object.assign({}, articlesState)
            addedComment[payload.articleId].comments.push(payload.comment.id)
            return addedComment
    }

    return articlesState
}