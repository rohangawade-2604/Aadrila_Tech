import React from 'react'
import circle from "../assets/Images/circle1.png"
import "../CSS_Components/Industries.css"

const Industries = () => {
  return (
    <>
      <section class="section-padding-block ">
        <div class="container">
          <div class=" industries-section">

            <div className="circle">
              <img src={circle} alt="circle" />
            </div>

             <div className="col-md-5 AI-content  ">
                <p className="text-orange">AI-driven innovation for growth.</p>
                <h2 className="">Industries We Empower</h2>
              </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Industries
