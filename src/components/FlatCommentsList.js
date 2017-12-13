import React, {Component} from 'react'
import Comment from './Comment'
import Loader from './common/Loader'
import {connect} from 'react-redux'
import {loadFlatListComments} from '../AC'
import {commentsPageLoadedSelector, commentsPageSelector} from "../selectors";
import {NavLink, Route} from 'react-router-dom'

class FlatCommentsList extends Component {
    static defaultProps = {
        page: 0,
        commentsPerPage: 5
    }

    componentDidMount() {
        const {commentsPageLoaded, loadFlatListComments, page, commentsPerPage} = this.props
        if (commentsPageLoaded) return

        loadFlatListComments(page * commentsPerPage, commentsPerPage)
    }

    componentWillReceiveProps(nextProps, nextState) {
        const {commentsPageLoaded, loadFlatListComments, page, commentsPerPage} = nextProps
        if (commentsPageLoaded) return

        loadFlatListComments(page * commentsPerPage, commentsPerPage)
    }

    render() {
        if (!this.props.commentsPageLoaded) return <Loader/>
        const {comments, commentsCount} = this.props

        return (
            <div>
                <h2>AllComments is here</h2>
                requested page {this.props.page} {this.props.commentsCount}
                {comments.length ? (
                    <ul>
                        {comments.map(id => <li key={id}><Comment id={id}/></li>)}
                    </ul>

                ) : <h3>No comments yet</h3>}
                {this.getPaginator()}
            </div>
        )
    }

    getPaginator = () => {
        const pagesCount = Math.round(this.props.commentsCount / this.props.commentsPerPage)
        let pageLinks=[]
        for (let i = 0; i <= pagesCount; i++)
            pageLinks.push(<NavLink key={i} activeStyle={{color: 'red'}} to={`/comments/${i}`}> {i} </NavLink>)

        return pageLinks
    }
}

const MapStateToProps = (state, props) => {
    return {
        commentsPageLoaded: commentsPageLoadedSelector(state, props),
        comments: commentsPageSelector(state, props),
        commentsCount: state.comments.commentsCount
    }
}


export default connect(MapStateToProps, {loadFlatListComments})(FlatCommentsList)
// export default connect({flatCommentsLoadingSelector}, {loadFlatListComments})(FlatCommentsList)