import React from 'react'
//import ArticleList from './ArticleList'
import ArticleList from './ArticleListExtended'

function App({ articles }) {
    return (
        <div>
            <h1>App name</h1>
            <ArticleList articles = {articles} />
        </div>
    )
}

export default App