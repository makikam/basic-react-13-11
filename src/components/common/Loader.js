import React from 'react'
import PropTypes from 'prop-types'

function Loader({props}, context) {
    return (
        <h2>{context.dict.loading}</h2>
    )
}

Loader.contextTypes = {
    dict: PropTypes.object
}

export default Loader