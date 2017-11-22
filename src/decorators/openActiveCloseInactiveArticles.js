import React from 'react'

export default (ArticleList) => class OpenActiveCloseInactiveArticles extends React.Component {
    state = {
        openArticleId: -1
    }

    toggleOpenArticle = openArticleId => {
        console.log(`in:${openArticleId}, state:${this.state.openArticleId}`)
        openArticleId === this.state.openArticleId ? this.setState({openArticleId : null}) : this.setState({openArticleId})
    }

    render() {
        return (
            <ArticleList {...this.props} {...this.state} toggleOpenArticle={this.toggleOpenArticle}/>
        )
    }


}