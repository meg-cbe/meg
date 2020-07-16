import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF,faInstagram,faYoutube } from '@fortawesome/free-brands-svg-icons'

export default function Social(props){
    return(
        <>
         <ul className={props.socialClass}>
                        <li><a href="https://www.facebook.com/megdeals-106238077547792/"><FontAwesomeIcon className='meg-round-social' icon={faFacebookF} /></a>
                        </li>
                        <li><a href="https://www.instagram.com/meg.deals/"><FontAwesomeIcon className='meg-round-social' icon={faInstagram} /></a></li>
                        <li><a href="/"><FontAwesomeIcon className='meg-round-social' icon={faYoutube} /></a></li>
                    </ul>
        </>
    )
}