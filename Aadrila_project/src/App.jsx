import React from 'react'
import {useRef} from 'react'
import './App.css'
import { Navbar } from './Components/Navbar'
import Hero from './Components/Hero'
import Industries from './Components/Industries'
import Blog from './Components/Blog'
import Contact from './Components/Contact'
import Product from './Components/Product'

function App() {
 
  const heroRef = useRef(null)
  const industriesRef = useRef(null)
  const productRef = useRef(null)
  const blogsRef = useRef(null)
  const contactRef = useRef(null)

  const scrollToSection = (ref) => {
    ref.current.scrollToSection({
      behaviour: 'smooth',
      block: 'start',
    });
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

      <section ref={heroRef}>
        <Hero/>
      </section>

      <section ref={industriesRef}>
        <Industries/>
      </section>

      <section>
        <Product/>
      </section>

      <section ref={blogsRef}>
        <Blog/>
      </section>

      <section ref={contactRef}>
        <Contact/>
      </section>
    </>
  )
}

export default App
