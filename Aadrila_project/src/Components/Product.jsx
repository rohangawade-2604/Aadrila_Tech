import React from 'react'
import "../CSS_Components/Product.css"
import product_img from "../assets/Images/product_dot.png"
import circle2 from "../assets/Images/circle2.png"
import sheet from "../assets/Images/AI_sheets.png"
import circle3 from "../assets/Images/circle3.png"
import dot1 from "../assets/Images/dot1.png"

const Product = () => {
  return (
    <>
      <div className="product section-padding-block">
        <div className="container">

          <div className="fluid-container position-relative mb-7">
            <div className="dot position-absolute">
              <img src={product_img} alt="" />
            </div>

            <div className="product-content text-center ">
              <h3>features and benefits.</h3>
              <h2>Our Products</h2>
            </div>

            <div className="circle-2 position-absolute">
              <img src={circle2} alt="" />
            </div>
          </div>

          <div className="img-content container-padding position-relative ">


            <div className="APD ">
              <button className='btn-doc mb-20'>DocSim </button>
              <h2 className='f-z'>AI-Powered Document Similarity Engine</h2>
              <p className='FB-para'>
                <span className='feature'>Features :</span>
                <span className='d-block f-s-16'>• Detects near-duplicates and tampered documents.</span>
                <span className='d-block f-s-16'>• Identifies fraudulent patterns across large repositories</span>
                <span className='d-block f-s-16'>•  Multi-language support for global adaptability</span>
              </p>

              <p className='FB-para  mb-20'>
                <span className='feature'>Benefits :</span>
                <span className='d-block f-s-16'>• Save 30% time on manual checks</span>
                <span className='d-block f-s-16'>• Reduce document fraud by up to 40%.</span>
              </p>

              <div className="button-2">
                <button className='button-primary'>Learn More</button>
                <button className='button-primary'>Schedule a Demo</button>
              </div>
            </div>

            <div className="sheet-img">
              <img src={sheet} alt="" className='sheet' />

            </div>
          </div>


          {/* ----------product-2------------ */}

          <div className="img-circle position-relative">
            <div className="position-relative">
              <img src={circle3} alt="" className='circle-3 position-absolute' />
            </div>

            <div className=" position-relative">
              <img src={dot1} alt="" className='position-absolute dot1' />
            </div>
          </div>

          <div className="img-content-2 container-padding position-relative flex-reverse ">


            <div className="APD-2 ">
              
              <button className='btn-doc mb-20 '>DocPilot </button>
              <h2 className='f-z'>Streamline Document Workflows with Automation</h2>
              <p className='FB-para'>
                <span className='feature'>Features :</span>
                <span className='d-block f-s-16'>• Automates document collection, routing, and task assignments.</span>
                <span className='d-block f-s-16'>• Real-time tracking with advanced dashboards</span>
                <span className='d-block f-s-16'>•  Seamless integration with enterprise systems via APIs.</span>
              </p>

              <p className='FB-para  mb-20'>
                <span className='feature'>Benefits :</span>
                <span className='d-block f-s-16'>•  Reduce turnaround times by 50%</span>
                <span className='d-block f-s-16'>• Improve operational efficiency with minimal manual effort.</span>
              </p>

              <div className="button-2">
                <button className='button-primary'>Learn More</button>
                <button className='button-primary'>Schedule a Demo</button>
              </div>
            </div>

            <div className="sheet-img-2">
              <img src={sheet} alt="" className='sheet' />

            </div>
          </div>

        </div>






      </div>



    </>
  )
}

export default Product
