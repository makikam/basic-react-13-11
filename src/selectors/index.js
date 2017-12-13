import {createSelector} from 'reselect'

export const articlesMapSelector = state => state.articles.entities
export const articlesLoadingSelector = state => state.articles.loading
export const filtersSelector = state => state.filters
export const commentListSelector = state => state.comments
export const idSelector = (_, props) => props.id

export const articlesSelector = createSelector(articlesMapSelector, articles => articles.valueSeq().toArray())
export const articleSelector = createSelector(articlesMapSelector, idSelector, (articlesMap, id) => articlesMap.get(id))

export const filtratedArticlesSelector = createSelector(articlesSelector, filtersSelector, (articles, filters) => {
    const {selected, dateRange: {from, to}} = filters

    return articles.filter(article => {
        const published = Date.parse(article.date)
        return (!selected.length || selected.includes(article.id)) &&
            (!from || !to || (published > from && published < to))
    })
})


export const createCommentSelector = () => createSelector(commentListSelector, idSelector, (comments, id) => {
    return comments.getIn(['entities', id])
})


export const commentsPageLoadedSelector = (state, props) => {
    const offset = props.page * props.commentsPerPage
    const length = offset + props.commentsPerPage
    const maxIdx = Math.min(length, state.comments.commentsCount || Infinity)

    for (let i = offset; i < maxIdx; i++){
        if (typeof state.comments.MapSnToId.get(i) === 'undefined') return false
    }

    return true
}

export const commentsPageSelector = (state, props) => {
    const startPos = props.page * props.commentsPerPage
    const lastPos = startPos + Math.min(props.commentsPerPage, (state.comments.commentsCount - startPos))

    const comments = []
    for (let i = startPos; i < lastPos; i++)
        comments.push(state.comments.MapSnToId.get(i))
    //const comments= state.comments.MapSnToId.valueSeq().toArray().slice(startPos, lastPos)
    console.log('in selector')
    console.log('pure')
    console.log(state.comments.MapSnToId.toJS())
    console.log('sliced')
    console.log(comments)
    return comments

    /*.reduce((acc, val) => {
                return {
                    ...acc,
                    [val]: state.comments.entities.get(val)
                }
            }, [])*/
}