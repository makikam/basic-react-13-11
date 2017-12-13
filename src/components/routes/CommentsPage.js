import React, {Component} from 'react'
import FlatCommentsList from '../FlatCommentsList'
import {Route, NavLink} from 'react-router-dom'


class CommentsPage extends Component {
    render() {
        const {id} = this.props.match.params
        return (
            <div>
                <h1>Comments Page List</h1>
                <h2>{id}</h2>
                <FlatCommentsList page={id} commentsPerPage={5}/>


            </div>
        )
    }
}

export default CommentsPage