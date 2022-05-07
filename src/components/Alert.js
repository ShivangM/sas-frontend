import React from 'react'

function Alert(props) {
    return (
        <div class="alert alert-warning alert-dismissible fade show fixed-top" role="alert">
            {props.message}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    )
}

export default Alert