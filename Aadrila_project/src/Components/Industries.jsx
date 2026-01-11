import React from 'react'
import "../CSS_Components/Industries.css"
import circle from "../assets/Images/circle1.png"
import dots from "../assets/Images/dot.png"
import dots1 from "../assets/Images/dots.png"
import health from "../assets/Images/Healthcare_Icon.png"
import insur from "../assets/Images/Insurance_Icon.png"
import lending from "../assets/Images/Lending_Icon.png"

const Industries = () => {
  return (
    <>
      <section class="section-padding-block">
        <div className="industries">


          <div class="container">

            <div className="section-cards">

              <div class="industries-section position-relative">

                <div className="circle position-absolute">
                  <img src={circle} alt="" />
                </div>

                <div className=" AI-content position-absolute">
                  <p className="text-orange">AI-driven innovation for growth.</p>
                  <h2 className="IWE">Industries We Empower</h2>
                </div>

                <div className="dots position-absolute">
                  <img src={dots} alt="" />
                </div>

                <div className="dots1 position-absolute">
                  <img src={dots1} alt="" />
                </div>

                      <div className="growth-cards position-relative">

                        <div className="card1 box-1 border position-absolute text-center ">
                          <img src={health} alt=""  className='mb-20'/>
                          <h2 className='care'>HealthCare</h2>
                          <p className='care-para'>Streamline patient record management and ensure compliance with HIPAA standards.</p>
                        </div>

                        <div className="card1 box-2 border position-absolute text-center">
                          <img src={lending} alt=""  className='mb-20'/>
                          <h2 className='care mb-20'>Lending</h2>
                          <p className='care-para'>Ensure faster loan approvals with fraud detection and instant verification.</p>
                        </div>

                        <div className="card1 box-3 position-absolute text-center">
                          <img src={insur} alt=""  className='mb-20'/>
                          <h2 className='care mb-20'>Insurance</h2>
                          <p className='care-para'>Automate claims processing with accurate document validation.</p>
                        </div>
                      </div>

              </div>

            </div>

          </div>
        </div>


      </section>

    </>
  )
}

export default Industries
