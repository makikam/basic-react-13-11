import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import Accordion from './common/Accordion'
import {connect} from 'react-redux'
import {DateUtils} from 'react-day-picker'

class ArticleList extends Accordion {
    render() {
        const {articles, dateRange, filteredArticles} = this.props
        const filteredArticlesIDs = filteredArticles.map((article) => article.value)

        if (!articles.length) return <h3>No Articles</h3>

        /*жадный фильтр
        filter(article => (dateRange.from === null) || DateUtils.isDayAfter(new Date(article.date), dateRange.from)).
        filter(article => (dateRange.to === null) || DateUtils.isDayBefore(new Date(article.date), dateRange.to)).*/
        const articleElements = articles.
        filter(article => DateUtils.isDayInRange(new Date(article.date), dateRange)).
        filter(article => (filteredArticlesIDs.length === 0) || filteredArticlesIDs.includes(article.id)).
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

export default connect(state => ({
    articles: state.articles,
    dateRange: state.dateRange,
    filteredArticles: state.articlesFilter}))(ArticleList)