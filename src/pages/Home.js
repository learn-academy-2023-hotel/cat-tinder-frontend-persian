import React from 'react'

const Home = () => {
  return (
    <div className='home'>
    <h1 className='catTinderText'>Purrfect Match</h1>
    <br></br>
    <h2 className='description'> "Welcome to Purrfect Match, the ultimate destination for feline romance! 🐾 Swipe right to meet your fur-ever friend and embark on a purrfectly delightful journey filled with whiskers, playdates, and endless cuddles. Because love is just a paw-swipe away! 💖</h2>
    <div>
        <img
          src={"https://raw.githubusercontent.com/wilsonmdrs/cat-tinder/main/src/assets/imgs/cattinder.png"}
          alt="Picture of cat"
          className='tinderImage'
        />
      </div> 
  </div>
  )
}

export default Home