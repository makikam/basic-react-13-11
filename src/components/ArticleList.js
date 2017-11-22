import React, {Component} from 'react'
import Article from './Article'
import PropTypes from 'prop-types'

export default class ArticleList extends Component {
    static PropTypes = {
        articles: PropTypes.array.isRequired
    }

    state = {
        openArticleId: null
    }

    render() {
        const articleElements = this.props.articles.map((article, index) => <li key = {article.id}>
            <Article article = {article}
                     isOpen = {this.state.openArticleId === article.id}
                     toggleOpen = {this.toggleOpenArticle}
            />
        </li>)
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
/*

    toggleOpenArticleWitoutCurr(openArticleId) {
        this.setState({ openArticleId })
    }
*/

    toggleOpenArticle = openArticleId => this.setState({ openArticleId })
}