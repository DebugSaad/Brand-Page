import React from 'react'

function Hero() {
  return (
    <div>
      <main className="hero contanier">
        <div className="left">
            <h1>
                YOUR FEET DESERVE THE BEST
            </h1>
            <p>
                YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.
            </p>
            <div className="herobtns">
                <button className='btn1'>Shop Now</button>
                <button className='btn2'>Category</button>
            </div>
            <div className="shopping">
                <p>Also Avaliable on</p>
                <div className="brand-logos">
                    <img src="/images/amazon.png" alt="amazon"/>
                    <img src="/images/flipkart.png" alt="flipkart"/>
                </div>
            </div>
        </div>
        <div className="right">
            <img src="/images/shoe_image.png" alt="shoe-image"/>
        </div>
      </main>
    </div>
  )
}

export default Hero
