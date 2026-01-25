import React from 'react'
import "../About_Css/AboutUS.css"
import logo from "../assets/Images/about_logo.png"
import {Contact} from "../Components/Contact"

export const AboutUs = () => {
    return (
        <>
            <section className='container-fluid section-padding-block About-container'>
                <div className="container container-padding">

                    <div className="row position-relative p-5">

                        <div className="row mb-5 d-flex justify-content-center">
                            <div className="col-12 w-50 text-center p-4 custom-shadow ">
                                <h2>About Us</h2>
                                <p>Meet the Minds Shaping Document Automation.</p>
                            </div>
                        </div>


                        <div className="row  ">

                            <div className="col-12 bg-white custom-shadow w-75 d-flex gap-4 align-items-center position-absolute col-line-1 p-2">
                                <div className='w-75 text-end d-flex justify-content-end'>
                                    <p className=' font-16 w-75 '>To redefine document management with cutting-edge technology that ensures accuracy, efficiency, and trust.</p>
                                </div>

                                <hr className='line' />
                                <h3>Our Vision</h3>
                                <img src={logo} alt="" />
                            </div>


                            <div className="col-12 bg-white custom-shadow w-75 d-flex flex-reverse gap-4 align-items-center position-absolute col-line-2 p-2">
                                <div className='w-75 text-start d-flex justify-content-start'>
                                    <p className=' font-16 w-75 '>To redefine document management with cutting-edge technology that ensures accuracy, efficiency, and trust.</p>
                                </div>

                                <hr className='line' />
                                <h3 className='text-end'>Our
                                    Mission</h3>
                                <img src={logo} alt="" />
                            </div>


                        </div>


                    </div>
                </div>
            </section>


            <section>
                <Contact/>
            </section>
        </>
    )
}

