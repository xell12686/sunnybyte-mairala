import type { NextPage } from 'next'
import Image from 'next/image'
import Blog from '../components/Blog'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'

const Home: NextPage = () => {
  return (
    
    <div className="Page">
      <Header />
      <Hero />
      <Services />
      <Blog />
      <Contact />
      <Footer />



    </div>
  )
}

export default Home
