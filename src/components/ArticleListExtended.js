import OpenActiveCloseAnother from "./OpenActiveCloseAnother";
import React, {Component} from 'react'
import Article from './Article'


export default class ArticleListExtended extends OpenActiveCloseAnother {
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
}