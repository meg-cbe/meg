import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'

export default function About(){
    return(
            <>
                <div className='meg-about-con'>
                    <h2 className="meg-accessories-head">ABOUT US</h2>
                    <p className="meg-about-content">We are MEG (Mechanical and Electrical Garage) manufacturers of touring
                         accessories and safety kits for motorcycles. Our company based in Coimbatore. 
                         We provide premium quality products with a lifetime warranty. Our mission is
                         to ensure the safety and reduces the issues of bike riders. To learn more about us, 
                         find us on instagram.</p>
                    <div className='meg-abt-insta'>
                        <a style={{"color":"#ff4b30"}} href="https://www.instagram.com/meg.deals/"><FontAwesomeIcon icon={faInstagram} /></a>
                    </div>
                </div>
               
            </>
    )
}