import React from 'react'
import './hero.css'
import { Carousel } from "react-bootstrap";
import License from "../assets/Images/License.png"
import Invoice from "../assets/Images/Invoice.png"
import Doc from "../assets/Images/Doc.png"

export const Hero = () => {
  return (
    <>
      <section className='hero_section section-padding-block'>
        <div className="container">
          <div className="cover-content">

            <div className="content">
              <h1 className='AI mb-30'> <span className='d-block'>AI-Powered</span> Document Automation & Fraud Detection</h1>

              <p className='mb-30 para'>Enhance security, accuracy, and efficiency with our cutting-edge AI solutions for seamless document processing and fraud prevention.</p>


              <div className="button-group ">
                <button className='button-secondary'>Get a Demo</button>
                <button className='button-secondary'>Explore Solution</button>
              </div>

            </div>
          </div>


          <div className="carousel-wrapper">
            <Carousel indicators={false} controls={true} interval={3000}>

              <Carousel.Item>
                <div className="carousel-card">
                  <img src={License} alt="Driving License" />
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div className="carousel-card">
                  <img src={Invoice} alt="Report Document" />
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div className="carousel-card">
                  <img src={Doc} alt="Table Data" />
                </div>
              </Carousel.Item>

            </Carousel>
          </div>





        </div>
      </section>
    </>
  )
}


