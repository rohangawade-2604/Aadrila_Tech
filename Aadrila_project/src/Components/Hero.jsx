import React from 'react'
import "../CSS_Components/Hero.css"

export const Hero = () => {
  return (
    <>
      <section className="hero-section section-padding-block">
        <div className="container hero-container">
          <div className="  hero-row ">
            <h1 className='AI mb-20'><span className='d-block'>AI-Powered</span>
              <span className='d-block'>Document Automation</span>
              & Fraud Detection</h1>

              <p className='para mb-20'>Enhance security, accuracy, and efficiency with our cutting-edge AI solutions for seamless document processing and fraud prevention.</p>

              <div className="buttons">
                <button className='button-secondary'>Get a Demo</button>
                <button className='button-secondary'>Explore Solution</button>
              </div>
          </div>

          <div className="content ">
           
          </div>
        </div>
      </section>
    </>
  )
}


