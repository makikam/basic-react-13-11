import React, {Component} from 'react'
import Article from './Article'
import PropTypes from 'prop-types'
import OpenActiveCloseInactiveArticles from "../decorators/openActiveCloseInactiveArticles";


class ArticleList extends Component {
    static PropTypes = {
        articles: PropTypes.array.isRequired
    }

    constructor(props) {
        super(props)
    }

    render() {
        const articleElements = this.props.articles.map((article, index) => <li key={article.id}>
            <Article article={article}
                     isOpen={this.props.openArticleId === article.id}
                     toggleOpen={this.props.toggleOpenArticle}
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
}


export default OpenActiveCloseInactiveArticles(ArticleList)