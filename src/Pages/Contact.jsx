import React from 'react'
import { Link } from "react-router-dom";
import '../Pages/Contact.css'

function Contact() {
  return (
    <>
    <div className="contacts">
      <h3 className='cu'>Contact Us</h3>
      <p className='hc'>
            {" "}
            <Link to="/" className="color">
              Home
            </Link>{" "}
            &gt; Contact Us</p>
    </div>
        <div className="main-contact">
    <div className="contact-main">
        <div className="contact-part">
        <h4 className='us'>Contact Us</h4>
        <h2 className='say'>Say Heloo!</h2>
        <p className='template-pr'>LUGX Gaming Template is based on the latest Bootstrap 5
       CSS framework. This template is provided by TemplateMo and it is suitable for your gaming shop ecommerce websites. Feel free to use this for any purpose. Thank you</p>
          <h3 className='addres'>Address</h3>
          <address className='addr'>Sunny Isles Beach, FL 33160, United States</address>
          <h4 className='pho'>Phone</h4>
          <p className='numb'>+123 456 7890</p>
          <h5 className='emi'>Email</h5>
          <h6 className='com'>lugx@contact.com</h6>
          </div>
    </div>
          
      <div className="right-contact">

        <div className="map"><iframe className='map' src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d28703.048432040243!2d-80.14451424586332!3d25.939130086013222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x88d9acfee073549d%3A0xf4e74db7a5da487a!2sSunny%20Isles%20Beach%2C%20FL%2033160%2C%20USA!3m2!1d25.9428707!2d-80.1233802!5e0!3m2!1sen!2sin!4v1762592359795!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
        <div className="first-inputs">
        <input type="text"  placeholder='Your Name..' className='con-input'/>
        <input type="address" placeholder='Your Surname...' className='con-input'/>
        </div>
        <div className="sec-input">
          <input type="emil" placeholder='Your E-mail...' className='con-input'/>
          <input type="text" placeholder='Subject...' className='con-input' />
        </div>
          <form class="message-form">
  <textarea className='ym' placeholder="Your Message"></textarea>
          <button className='con-btn'>SEND MESSAGE NOW</button>
          </form>
        </div>

    </div>
    </>
  )
}

export default Contact