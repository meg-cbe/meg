import React from 'react'
import {Link} from 'react-router-dom'

export default function SimpleCard(props){
    return(
        <>
        <Link to={`/productDetail/${props.id}/${props.name}`}>
        <div className="meg-simple-card">
                    <div className="meg-simple-product">
                        <img src={props.url} alt="adv guard"/>
                    </div>
                    <div className="meg-quick-content">
                        <h2>{props.name} </h2>
                        <h4>{props.brand}</h4>
                        <p><b>From:</b> {props.price}</p>
                    </div>
        </div>
        </Link>
        </>
    )
}