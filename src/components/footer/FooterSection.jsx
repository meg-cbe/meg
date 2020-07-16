import React from 'react';
import Social from '../others/Social'

export default function FooterSection(){
    return(
    
        <footer className="meg-foot">
        <div className="meg-foot-out ">
            <div className="meg-foot-flex ">
                <div className="meg-log">
                    <img className="meg-logo-png lazy" src="/assets/logo-min.png"
                        alt="interlock groups logo"/>
                </div>
                <aside className="meg-foot-one">
                    <ul className="meg-foot-navlinks meg-flex">
                        <li><a href="/">HOME</a></li>
                        <li><a href="/about">ABOUT US</a></li>
                        <li><a href="/accessories" >ACCESSORIES</a></li>
                        <li><a href="/contactus">CONTACT US</a></li>
                    </ul>
                   <Social socialClass="meg-foot-social social-margin meg-flex meg-margin-right-25" />
                </aside>

            </div>
            <div className="meg-rights">
                <hr/>
                <p className="meg-copy"> <span>© 2020 MEG. All Rights Reserved.</span></p>
            </div>
        </div>
        </footer>
    )
}