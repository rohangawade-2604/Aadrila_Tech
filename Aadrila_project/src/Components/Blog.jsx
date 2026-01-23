import React from 'react'
import "../CSS_Components/Blog.css"
import group from "../assets/Images/Group-dots.png"
import grpdot from "../assets/Images/grpdot.png"
import design from "../assets/Images/design.png"

export const Blog = () => {
  return (
    <>
      <div className="Blogs">
        <div className="container">

          <div className="image-content-1 position-relative">

            <div className="img-dot position-absolute">
              <img src={group} alt="" />
            </div>

            <div className="content-1 text-center">
              <h2>Blogs</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                <span className='d-block'>Lorem Ipsum has been the industry's standard.</span></p>
            </div>

            <div className="img-dot-2 position-absolute">
              <img src={grpdot} alt="" />
            </div>
          </div>


          <div className="row row-col-3 container-padding mb-20">

            <div className="col">
              <div className="card-wrapper position-relative ">
              
                <div className="card-box position-relative">
                  <h5 className='card-head'>How AI is Revolutionizing Document Management for Enterprises</h5>
                  <small className="text-primary">24 July, 2023</small>
                  <p className='param-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and...</p>
                </div>

                  <div className="bg-box position-absolute">
                  <img src={design} alt="" className='box-model'/>
                </div>
              </div>
            </div>


            {/* card 2 */}
            <div className="col">
              <div className="card-wrapper position-relative">
              
                <div className="card-box position-relative">
                  <h5 className='card-head'>Top 5 Fraud Prevention Strategies for Financial Institutions</h5>
                  <small className="text-primary">24 July, 2023</small>
                  <p className='param-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and...</p>
                </div>

                  <div className="bg-box position-absolute">
                  <img src={design} alt="" className='box-model'/>
                </div>
              </div>
            </div>


          {/* card-3 */}

            <div className="col">
              <div className="card-wrapper position-relative">
              
                <div className="card-box position-relative">
                  <h5 className='card-head'>The Future of OCR: From Basic Extraction to AI-Driven Intelligence</h5>
                  <small className="text-primary">24 July, 2023</small>
                  <p className='param-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and...</p>
                </div>

                  <div className="bg-box position-absolute">
                  <img src={design} alt="" className='box-model'/>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </>
  )
}


