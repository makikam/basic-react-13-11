import {createSelector} from 'reselect'

export const articlesSelector = state => state.articles
export const filtersSelector = state => state.filters
export const commentsByArticleIdSelector = (state, props) => state.articles[props.articleId].comments.map(id => state.comments[id])
export const commentListSelector = state => state.comments
export const idSelector = (_, props) => props.id

/*export const commentListByArticleIdSelector = createSelector(commentsByArticleIdSelector, state, (comments, state) =>
{
    return comments.map(comment => state.comments[comment])
})*/


export const filtratedArticlesSelector =
    createSelector(articlesSelector, filtersSelector, (articles, filters) => {

        const {selected, dateRange: {from, to}} = filters

        /*return articles.filter(article => {
            const published = Date.parse(article.date)
            return (!selected.length || selected.includes(article.id)) &&
                (!from || !to || (published > from && published < to))
        })*/

        const result = Object.assign({}, articles)

        Object.keys(result).forEach(key => {
            const published = Date.parse(result[key].date)

            if ((selected.length && !selected.includes(articles[key].id)) ||
                (from && to && !(published > from && published < to))) delete result[key]
        })

        return result
    })

export const createCommentSelector = () => createSelector(commentListSelector, idSelector, (comments, id) => {
    console.log('---', 'commentSelector', id)
    return comments[id]
})