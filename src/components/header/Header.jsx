import React from 'react';
import Social from '../others/Social'

export default function Header(props){
    return(
            <header className={`meg-head-header ${props.header}`} >
                <div className={`meg-header meg-nav-con ${props.ground}`} >
                    <div className="logo-con">
                        <img src={props.url} alt="meg logo"/>
                    </div>
                    <nav className={`meg-topnav ${props.link}`}>
                        <ul>
                            <li><a href="/">HOME</a></li>
                            <li><a href="/about">ABOUT US</a></li>
                            <li><a href="/accessories">ACCESSORIES</a></li>
                            <li><a href="/contactus">CONTACT US</a></li>
                        </ul>
                    </nav>
                    <div className="meg-search-div">
                        <div className="meg-container">
                            <form className="search-form" id="search-form">
                                <input type="text" className={`searchbox ${props.search}`} />
                            </form>
                        </div> 
                        <div className="meg-cart-icon">
                            <a href="/cart">
                            <img src={props.cart} alt="cart"/>
                            <span>0</span>
                            </a>
                           
                        </div>  
                        <div className={`meg-ham meg-ham-height ${props.hamClass}`}>
                            <span className="meg-ham-bar-top meg-top-rotate"></span>
                            <span className="meg-ham-bar meg-none"></span>
                            <span className="meg-ham-bar-bottom meg-bottom-rotate"></span>
                        </div>         
                    </div>
                </div>

                <div className="meg-mob-link-flex">
                    <nav className="meg-mobNav">
                        <ul className={`meg-mob-li ${props.mobLink}`}>
                            <li><a href="/">HOME</a></li>
                            <li><a href="/about">ABOUT US</a></li>
                            <li><a href="/accessories" >ACCESSORIES</a></li>
                            <li><a href="/contactus">CONTACT US</a></li>
                        </ul>
                    </nav>
                    <div>
                        <Social socialClass={`${props.social} social-margin meg-flex`} />
                    </div>
                </div>
            </header>
    )
}