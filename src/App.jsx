import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import About from './page/About'
import Sea from './page/Sea'
import Tample from './page/Tample'
import Mountion from './page/Mountion'
import Navbar from './components/ui/Navbar'
import Footer from './components/ui/Footer'
import { Carousel } from './components/ui/carousel'
import fetchAPI from './utils/fetchAPI'

const App = () => {
  console.log(fetchAPI())

  return (
    <div>
      {/* Navbar */}
      <nav>
        <Navbar />
      </nav>

      {/* Carousel (Banner under Navbar) */}
      <section>
        <Carousel />
      </section>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tample" element={<Tample />} />
        <Route path="/sea" element={<Sea />} />
        <Route path="/mountion" element={<Mountion />} />
      </Routes>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
