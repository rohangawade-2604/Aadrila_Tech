import React from 'react'
import "../CSS_Components/Contact.css"
import dotcontact from '../assets/Images/dotcontact.png'
import location from '../assets/Images/location.png'


export const Contact = () => {
  return (
    <>
      <div className="container-fluid section-padding-block ">

        <div className="container container-padding">

          <div className="dotimg ">
            <img src={dotcontact} alt="" />
          </div>

          <div className="row cols-md-2 ">

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


            <div className="col w-100 position-relative ">

              <div className="contact-form p-5 rounded-3 w-100 position-absolute">
                <form action="" className=''>
                  <div className="row mb-3">
                    <div className="col-md-6 mb-3 mb-md-0">
                      <input type="text" placeholder="Name" className="form-control p-2 rounded-2" />
                    </div>

                    <div className="col-md-6">
                      <input type="email" placeholder="Email" className="form-control p-2 rounded-2" />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-md-6 mb-3 mb-md-0">
                      <input type="text" placeholder="Company" className="form-control p-2 rounded-2 " />
                    </div>

                    <div className="col-md-6">
                      <input type="text" placeholder="Phone Number" className="form-control p-2 rounded-2" />
                    </div>
                  </div>


                  <div className="row mb-3 ">
                    <div className="col-12 col-md-6 w-100">
                      <input type="text" placeholder="Inquiry Type" className="form-control p-2  rounded-2" />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12">
                      <textarea name="message" id="message" rows="5" placeholder="Message" className="form-control w-100 p-2 rounded-2"></textarea>
                    </div>
                  </div>


                  <button className='button-enquiry mt-3'>Send Enquiry</button>
                </form>
              </div>



            </div>


          </div>
        </div>
      </div>
    </>
  )
}


