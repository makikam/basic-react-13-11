import React, {Component} from 'react'

export default class OpenActiveCloseAnother extends Component{
    constructor(props){
        super(props)
    }

    state = {
        openArticleId: null
    }

    toggleOpenArticle = openArticleId => {
        if (openArticleId === this.state.openArticleId) {
            this.setState({openArticleId: null})
        }
        else
            this.setState({openArticleId})
    }

    render(){return null}
}