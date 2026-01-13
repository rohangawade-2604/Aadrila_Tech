import React from 'react'
import "../CSS_Components/Product.css"
import product_img from "../assets/Images/product_dot.png"
import circle2 from "../assets/Images/circle2.png"
import sheet from "../assets/Images/AI_sheets.png"

const Product = () => {
  return (
    <>
      <div className="product section-padding-block">
        <div className="container">

          <div className="fluid-container position-relative">
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

          <div className="img-content position-relative section-padding-block">

          
            <div className="APD ">
               <button className='btn-doc mb-20'>DocSim </button>
                <h2 className='f-z'>AI-Powered Document Similarity Engine</h2>
                <p className='FB-para'>
                  <span className='feature'>Features :</span>
                  <span className='d-block f-s-16'>• Detects near-duplicates and tampered documents.</span>
                  <span className='d-block f-s-16'>• Identifies fraudulent patterns across large repositories</span>
                  <span className='d-block f-s-16'>•  Multi-language support for global adaptability</span>
                </p>

                <p className='FB-para'>
                  <span className='feature'>Benefits :</span>
                  <span className='d-block f-s-16'>• Save 30% time on manual checks</span>
                  <span className='d-block f-s-16'>• Reduce document fraud by up to 40%.</span>
                </p>
            </div>

            <div className="sheet-img">
              <img src={sheet} alt="" className='sheet'/>
                
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Product
