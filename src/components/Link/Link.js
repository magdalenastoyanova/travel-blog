import React from 'react'
import { Link } from 'react-router-dom'


const LinkComponent = ({ title, href, type }) => {
    return (
        <div className={[`${type}-list-item`]}>
            <Link to={href} className={[`${type}-link`]}>
                {title}
            </Link>
        </div>
    )
}

export default LinkComponent