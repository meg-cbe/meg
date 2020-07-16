import React from 'react'
import '../styles/cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrashAlt} from '@fortawesome/free-regular-svg-icons';
import MegLink from '../buttons/MegLink'

export default class Cart extends React.Component{
    
    handleChange=(e)=> {
        console.log(e.target.value)
    }

    render(){
        return(
            <>
            <div className="meg-cart">
            <div className="meg-cart-wrapper">
                <div className="meg-cf-head">
                    <h2 className="meg-cart-head">Shopping Cart</h2>
                    <MegLink class="meg-btn-orange" link="/accessories" title="SHOP NOW"/>
                </div>
                <div className="meg-cart-list-con">
                    <div className="meg-cart-flex">
                        <div className="meg-cart-details">
                            <img src="/assets/dominar/handlebarraiser0.jpg" alt="raiser"/>
                            <div className="meg-cart-title">
                                <p className="meg-cart-brand">DOMINAR</p>
                                <h3>Handlebar Raiser</h3>     
                                <div className="meg-cart-input-con">     
                                    <input type="number" min="0" max="100" value="2" onChange={this.handleChange}/>
                                    <p className="meg-cart-price-single"><span>&#10005;</span>  ₹ 700.00</p>
                                </div>
                            </div>
                        </div>
                        <div className="meg-cart-price">
                            <p className="meg-cart-total">₹ 1400.00</p>
                            <FontAwesomeIcon className="meg-cart-delete" icon={faTrashAlt} />
                        </div>
                    </div>     
                </div>
                <div className="meg-cart-list-con">
                    <div className="meg-cart-flex">
                        <div className="meg-cart-details">
                            <img src="/assets/dominar/advguard0.jpg" alt="adv"/>
                            <div className="meg-cart-title">
                                <p className="meg-cart-brand">DOMINAR</p>
                                <h3>Adv Guard</h3>     
                                <div className="meg-cart-input-con">     
                                    <input type="number" min="0" max="100" value="1" onChange={this.handleChange}/>
                                    <p className="meg-cart-price-single"><span>&#10005;</span>  ₹ 3740.00</p>
                                </div>
                            </div>
                        </div>
                        <div className="meg-cart-price">
                            <p className="meg-cart-total">₹ 3740.00</p>
                            <FontAwesomeIcon className="meg-cart-delete" icon={faTrashAlt} />
                        </div>
                    </div>     
                </div>
            </div>
        </div>
            </>
        )
    }
}