import React from 'react'
import "../CSS_Components/Contact.css"
import dotcontact from '../assets/Images/dotcontact.png'
import location from '../assets/Images/location.png'


export const Contact = () => {
  return (
    <>
      <div className="container-fluid section-padding-block">

        <div className="dotimg">
          <img src={dotcontact} alt="" />
        </div>

        <div className="container container-padding">

          <div className="row cols-md-2">

            <div className="col">
              <h2>Contact US</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>

              <div className="location-point">
                <div className="location-head">
                  <img src={location} alt="" />
                  <h5 className='card-head'>U.S Office</h5>
                </div>

                <p className='param-2'>Aadrila Technologies INC,
                  8 The Green, Ste R, in the City of Dover County of Kent Zip Code 19901.</p>
              </div>


              <div className="location-point">
                <div className="location-head">
                  <img src={location} alt="" />
                  <h5 className='card-head'>India Office</h5>
                </div>

                <p className='param-2'>Aadrila Aadrila Technologies Private Limited,
                  Unit 707, Lotus Trade Centre, Sahakar Nagar, New Link Road, Near D.N.Nagar, Andheri West, Mumbai, Maharashtra 400053.</p>
              </div>
            </div>


            <div className="col">

              <div className="contact-form  p-5">
                <form action="" className=''>
                  <div className="name-email">
                    <input type="text" placeholder='Name' className='mb-20 p-2 w-50 p-2 w-50 rounded-2 ' />
                    <input type="email" placeholder='Email' className='mb-20 p-2 w-50 p-2 w-50 rounded-2' />
                  </div>

                  <div className="company-number">
                    <input type="text" placeholder='Company' className='mb-20 p-2 w-50 p-2 w-50 rounded-2' />
                    <input type="text" placeholder='Phone Number' className='mb-20 p-2 w-50 p-2 w-50 rounded-2' />
                  </div>

                  <div className="inquiry">
                    <input type="text" placeholder='Inquiry Type' className='mb-20 p-2 w-100 p-2 w-50 rounded-2' />
                  </div>

                  <textarea name="message" id="message" cols="30" rows="5" placeholder='Message' className='mb-20 p-2 w-100 p-2 w-50 rounded-2'></textarea>

                  <button className='button-secondary'>Send Enquiry</button>
                </form>
              </div>



            </div>


          </div>
        </div>
      </div>
    </>
  )
}


