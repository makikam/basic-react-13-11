import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'
import Accordion from './common/Accordion'
import Loader from './common/Loader'
import {connect} from 'react-redux'
import {filtratedArticlesSelector, articlesLoadingSelector} from '../selectors'
import {loadAllArticles} from '../AC'

class ArticleList extends Accordion {
    static contextTypes = {
        dict: PropTypes.object
    }

    componentDidMount() {
        this.props.loadAllArticles()
    }

    render() {
        const {articles, loading} = this.props
        if (loading) return <Loader/>
        console.log(`--------------`)
        console.log(this.context)
        if (!articles.length) return <h3>{this.context.dict.noArticle}</h3>
        const articleElements = articles.map((article) => <li key={article.id}>
            <NavLink activeStyle={{color: 'red'}} to={`/articles/${article.id}`}>{article.title}</NavLink>
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

export default connect(state => {
    return {
        articles: filtratedArticlesSelector(state),
        loading: articlesLoadingSelector(state)
    }
}, {loadAllArticles}, null, {pure: false})(ArticleList)