import React from 'react'
// import circle from "../assets/Images/circle1.png"
import "../CSS_Components/Industries.css"
import dots from "../assets/Images/dot.png"
import dots1 from "../assets/Images/dots.png"

const Industries = () => {
  return (
    <>
      <section class="section-padding-block">
        <div className="industries">

       
        <div class="container">

          <div className="section-cards">

            <div class="industries-section">

              <div className=" AI-content  ">
                <p className="text-orange">AI-driven innovation for growth.</p>
                <h2 className="">Industries We Empower</h2>
              </div>

              <div className="dots">
                  <img src={dots} alt="" />
              </div>

              <div className="dots1">
                <img src={dots1} alt="" />
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
