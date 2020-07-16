import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function QuickCard(props){
    return(
        <>
        <div className="quick-card">
                    <div className="quick-product">
                        <img src={props.url} alt="adv guard"/>
                    </div>
                    <div className="quick-content">
                        <h2>{props.name} </h2>
                        <h4>{props.brand}</h4>
                        <p><b>From:</b> {props.price}</p>
                        <div className="price-arrow">
                        <Link to={`/productDetail/${props.id}/${props.name}`}><p>Add to cart</p></Link>
                        <Link to={`/products/${props.id}`}> <FontAwesomeIcon className='meg-right-arrow' icon={faArrowRight} /></Link>
                        </div>
                    </div>
                </div>
        </>
    )
}