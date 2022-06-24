import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HomeSection from '../components/HomeComponents/HomeSection'

const Home = () => {
  return (
    <div className='px-8'>
        <Header />
        <HomeSection />
        <Footer />
    </div>
  )
}

export default Home
