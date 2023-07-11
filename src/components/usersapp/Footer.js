import React from 'react'
import '../allcss/Footer.css'
import { BsInstagram } from 'react-icons/bs'
import {FiTwitter} from 'react-icons/fi'
import { BsLinkedin } from 'react-icons/bs'
function Footer() {
  return (
    <div className=' footer '>
      <div className="row   px-3 py-3">
       {/*company logo */}
          <div className="col-sm-3">

          </div>
          {/*About Us */}
          <div className="col-sm-3 text-white">
          We’re reimagining how you buy, sell and rent. It’s now easier to get into a place you love. So let’s do this, together.
          </div>
          {/*company*/}
          <div className="col-sm-3"> 
          <ul className='about'>
              <li >About Us</li>
              <li>Careers</li>
              <li>Terms and Conditions</li>
              <li>Privacy Policy</li>
              <li> Cancellation and Return Policy</li>
              <li>Contact Us</li>

            </ul>
             
          </div>
          {/*follow us on */}
          <div className="col-sm-3">
              <h5>Follow Us On</h5> 
          <ul class="social-icons">
            <li><a href="#"><i class="fa "><BsInstagram/></i></a></li>
            <li><a href="#"><i class="fa "><FiTwitter/></i></a></li>
            <li><a href="#"><i class="fa  "><BsLinkedin/></i></a></li>
           
          </ul>
            
          </div>

      </div> 
        
    </div>
  )
}

export default Footer