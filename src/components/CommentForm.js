import React, {Component} from 'react'
import UserField from './userField'
import CommentText from './commentText'


export default class CommentForm extends Component {
    state = {
        user: '',
        text: '',
        userClassName: ''
    }


    render() {
        return (
            <form action = "#">
                <UserField valChange={this.handleUser}/>
                <p><CommentText minLength = {20} valChange = {this.handleComment}/></p>
                <p><input type = "submit" action = "#"/></p>
            </form>
        )
    }


    handleUser = (userName) => {
        this.setState({user: userName})
    }


    handleComment = (commentText) =>{
        this.setState({text: commentText})
    }

}
