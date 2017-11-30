import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import Accordion from './common/Accordion'
import {connect} from 'react-redux'
import {DateUtils} from 'react-day-picker'

class ArticleList extends Accordion {
    render() {
        const {articles, dateRange, articlesFilter, filteredArticles} = this.props


        if (!articles.length) return <h3>No Articles</h3>

        // фильтр на строгое соответствие
        // filter(article => DateUtils.isDayInRange(new Date(article.date), dateRange)).
        console.log(typeof filteredArticles)
        const articleElements = filteredArticles.
        map((article) => <li key={article.id}>
                                <Article article={article}
                                         isOpen={article.id === this.state.openItemId}
                                         toggleOpen={this.toggleOpenItemMemoized(article.id)}
                />
            </li>)
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}


ArticleList.defaultProps = {
    articles: []
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
}


const mapStateToProps = (state) => {
        const filteredArticlesIDs = state.articlesFilter.map((article) => article.value)
        const {from, to} = state.dateRange
        const {articles} = state
        return {
            articles: state.articles,
            dateRange: state.dateRange,
            articlesFilter: state.articlesFilter,
            filteredArticles: articles.
                filter(article => (from === null) || DateUtils.isDayAfter(new Date(article.date), from)).
                filter(article => (to === null) || DateUtils.isDayBefore(new Date(article.date), to)).
                filter(article => (filteredArticlesIDs.length === 0) || filteredArticlesIDs.includes(article.id))}
}


export default connect(mapStateToProps)(ArticleList)