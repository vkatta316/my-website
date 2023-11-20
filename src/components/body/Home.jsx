import React from 'react'


function Home() {
  document.title = "Home"

  return (
    <section className='flex1 landing' >
      <div className="textContainer waviy">
        <h1 className='name'>
          Vinay Katta
        </h1>

        <p className="description">
          I am a Full stack developer
        </p>
      </div>
      
    </section>
  )
}

export default Home