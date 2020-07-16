import React from 'react'
import HeadText from './HeadText'

export default function Contact(){
    return(
        <>
            <HeadText title="CONTACT" sub1="GET IN TOUCH"
               sub2="CONTACT SUPPORT SERVICES" 
               absTextClass="meg-contact-container white-rel" 
               contentClass="meg-brand white-top" classAbs="grey-abs" />
                <div className="meg-address">
                  <div className="meg-address-text">
                    <h3>ADDRESS</h3>
                    <p className="meg-para">32/1, Anniappan Street, <br/>
                     Nallampalayam ganapathy post, <br/> 
                     Coimbatore-641006, Tamilnadu</p>
                    <h3>8524019556</h3>
                    <h3>hello@meg.deals</h3>
                  </div>
                  <div className="meg-contact-input">
                    <h3>Lets Talk</h3>
                    <div className="meg-form">
                      <form className="form-container" action="https://api.staticforms.xyz/submit" method="POST">
                        <input type="hidden" name="accessKey" value="47fe951c-15f0-4b3b-aa7f-06e447cb51b6"/>
                        <input className="contact-details" type="text" name="name" id="name" placeholder="Name" required />
                        <input className="contact-details" type="text" name="email" id="email" placeholder="Email" required />
                        <input className="contact-details" type="text" name="phone" id="phone" placeholder="Phone"/>
                        <textarea className="contact-details" name="message" id="message" rows="8"
                         placeholder="Write Message"></textarea>
                        <input type="text" name="honeypot" style={{display:"none"}}/>
                        <input type="hidden" name="replyTo" value="@"/>
                        <input className="meg-btn-submit" type="submit" value="SUBMIT" />
                      </form>
                  </div>
                </div>
              </div>
        </>
    )
}