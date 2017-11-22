import React from 'react'
import PropTypes from 'prop-types'

function Comment({comment}) {
    Comment.PropTypes = {
        text: PropTypes.string.isRequired,
        user: PropTypes.string.isRequired
    }

    return (
        <div>
            {comment.text} <b>by {comment.user}</b>
        </div>
    )
}

export default Comment