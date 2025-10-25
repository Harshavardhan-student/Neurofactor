import React from 'react'
import '../styles/community.css'

const Community = () => {
  const galleryImages = [
    {
      src: '/person1.png',
      alt: 'Community gathering at Tiffin Box'
    },
    {
      src: '/person2.png',
      alt: 'Celebration at Tiffin Box'
    },
    {
      src: '/person3.png',
      alt: 'Team at Tiffin Box'
    },
    {
      src: '/person4.png',
      alt: 'Special dish presentation'
    }
  ]

  return (
    <section className="community-section">
      <div className="section-content">
        {/* Section label */}
        <h4 className="section-label">INSTAGRAM</h4>
        
        {/* Main heading */}
        <h2 className="section-heading">
          <span className="heading-line">JOIN OUR</span>
          <span className="heading-line">COMMUNITY</span>
        </h2>
        
        {/* Gallery */}
        <div className="gallery-container">
          {galleryImages.map((image, index) => (
            <div key={index} className="gallery-item">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="gallery-image"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Community