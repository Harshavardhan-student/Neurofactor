import React from 'react'
import '../styles/brandChef.css'

const BrandChef = () => {
  return (
    <section className="brand-chef-section">
      <div className="section-content">
        {/* Section label */}
        <h4 className="section-label">CHEF</h4>
        
        {/* Main heading */}
        <h2 className="section-heading">OUR BRAND CHEF</h2>
        
        <div className="chef-container">
          {/* Left column - Chef's image */}
          <div className="chef-image-container">
            <img 
              src="/chef.png" 
              alt="Chef Jomon - Senior Chef at Tiffin Box" 
              className="chef-image"
            />
            <div className="chef-signature">
              Chef Jomon.
            </div>
          </div>
          
          {/* Right column - Chef's details */}
          <div className="chef-details">
            <div className="chef-header">
              <h3 className="chef-name">CHEF JOMON</h3>
              <p className="chef-title">senior chef at tiffin box</p>
            </div>
            
            <div className="chef-bio">
              <p>
                Craving your favorite South Indian dishes? Enjoy the 
                rich, authentic flavors of The Tiffin Box from the comfort 
                of your home. Order online for a quick and easy delivery 
                straight to your doorstep. Our dishes are prepared 
                fresh and delivered fast, ensuring
              </p>
              <p>
                Craving your favorite South Indian dishes? Enjoy the 
                rich, authentic flavors of The Tiffin Box from the comfort 
                of your home. Order online for a quick and easy delivery 
                straight to your doorstep.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandChef