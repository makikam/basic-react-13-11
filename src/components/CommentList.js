import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import CommentForm from './CommentForm'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import {addCommentToArticle} from '../AC'
import {commentsByArticleIdSelector} from '../selectors'


class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array.isRequired,
        //from toggleOpen decorator
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    render() {
        console.log('rendering CommentList')
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
        /*console.log('props')
        console.log(this.props)
        console.log('comments')
        console.log(this.props.comments)*/
        // return
        const {articleId, isOpen, comments} = this.props
        if (!isOpen) return null

        const body = comments.length ? (
            <ul>
                {comments.map(id => <li key={id.id}><Comment comment={id}/></li>)}
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

const mapStateToProps = (state, props) => {
    return {
        comments: commentsByArticleIdSelector(state, props)
    }
}

export default connect(mapStateToProps, {addCommentToArticle: addCommentToArticle})(toggleOpen(CommentList))
// export default toggleOpen(CommentList)
