import React from 'react'
import {Link} from 'react-router-dom'
import firebase from '../firebase/config'

const LinkComponent = ({ title, to }) => {
    return (
        <Link to={to}>
        <div>
            <span>{title}</span>
        </div>
    </Link>
    )
}

export default LinkComponent