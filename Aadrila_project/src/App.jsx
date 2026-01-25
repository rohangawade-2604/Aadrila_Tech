import React, { useRef } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Navbar } from './Components/Navbar'
import { Hero } from './Components/Hero'
import { Industries } from './Components/Industries'
import { Product } from './Components/Product'
import { Blog } from './Components/Blog'
import { Contact } from './Components/Contact'
import { Footer } from './Components/Footer'
import { AboutUs } from './About_Component/AboutUs'

function App() {

  const heroRef = useRef(null)
  const industriesRef = useRef(null)
  const productRef = useRef(null)
  const blogsRef = useRef(null)
  const contactRef = useRef(null)

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Navbar
        scrollToSection={scrollToSection}
        heroRef={heroRef}
        industriesRef={industriesRef}
        productRef={productRef}
        blogsRef={blogsRef}
        contactRef={contactRef}
      />

      <div className="page-content">
        <Routes>

          {/* HOME */}
          <Route
            path="/"
            element={
              <>
                <section ref={heroRef}><Hero /></section>
                <section ref={industriesRef}><Industries /></section>
                <section ref={productRef}><Product /></section>
                <section ref={blogsRef}><Blog /></section>
                <section ref={contactRef}><Contact /></section>
              </>
            }
          />

          {/* ABOUT */}
          <Route path="/about" element={<AboutUs />} />

        </Routes>
      </div>

      <Footer />
    </>
  )
}

export default App
