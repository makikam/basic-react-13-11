import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import CommentForm from './CommentForm'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import {addCommentToArticle} from '../AC'

class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array.isRequired,
        //from toggleOpen decorator
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    render() {
        const {isOpen, toggleOpen} = this.props
        const text = isOpen ? 'hide comments' : 'show comments'
        return (
            <div>
                <button onClick={toggleOpen}>{text}</button>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        const {comments, articleId, isOpen} = this.props
        if (!isOpen) return null

        const body = comments.length ? (
            <ul>
                {comments.map(id => <li key={id}><Comment id={id}/></li>)}
            </ul>
        ) : <h3>No comments yet</h3>

        return (
            <div>
                {body}
                <CommentForm parentId={articleId} addCommentHandler={this.addCommentHandler}/>
            </div>
        )
    }

    addCommentHandler = comment => this.props.addCommentToArticle(this.props.articleId, comment)
}

export default connect(null, {addCommentToArticle: addCommentToArticle})(toggleOpen(CommentList))
// export default toggleOpen(CommentList)