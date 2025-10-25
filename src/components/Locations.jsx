import React from 'react'
import '../styles/locations.css'

const Locations = () => {
  return (
    <section className="locations-section">
      <div className="locations-content">
        {/* Left Column - Text Content */}
        <div className="locations-text">
          <h4 className="section-label">OUR LOCATIONS</h4>
          <h2 className="section-heading">
            <span className="heading-line">FIND US</span>
            <span className="heading-line">AT THESE</span>
            <span className="heading-line">CONVENIENT</span>
            <span className="heading-line">LOCATIONS</span>
          </h2>
          <button className="store-button">
            <span>Our Store</span>
            <span className="button-arrow">→</span>
          </button>
        </div>

        {/* Right Column - Map */}
        <div className="map-container">
          <div className="map-circle">
            {/* Map Background */}<img src="/map.png"/>
            <div className="map-background"></div>
            
            {/* Location Markers */}
            <div className="location-marker marker-1">
              <div className="marker-pin"></div>
            </div>
            <div className="location-marker marker-2">
              <div className="marker-pin"></div>
              
              {/* Location Tooltip */}
              <div className="location-tooltip">
                <h3 className="location-name">TIFFIN BOX</h3>
                <p className="location-address">
                  ALLERTON RD,<br />
                  LIVERPOOL L25 7RE
                </p>
                <a href="#" className="get-direction">
                  GET DIRECTION
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Locations
