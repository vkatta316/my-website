import React from 'react'
import Body from './components/body/Body'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'

function MainComponent() {
  return (
    <div className='mainContainer'>
        <Header />
        <Body />
        <Footer />
    </div>
  )
}

export default MainComponent