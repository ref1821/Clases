import React from 'react'
import './l.css'
const Linkss = (props) => {
    
    return (
        <div className="container">
            <a className="am" href={props.name}>{props.title}</a>
        </div>
    )
}

export default Linkss
