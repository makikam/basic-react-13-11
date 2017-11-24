import React, {PureComponent} from 'react'

export default class CommentForm extends PureComponent {
    state = {
        user: '',
        text: ''
    }

    render() {
        return (
            <form action="#">
                <input type = "text" value = {this.state.user} placeholder="User name"/>
                <p><textarea placeholder="Comment text" /></p>
                <p><input type = "submit"/></p>
            </form>
        )
    }
}

