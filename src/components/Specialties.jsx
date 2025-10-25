import React from 'react'
import '../styles/specialties.css'
import '../styles/specialties.css'

export default function Specialties() {
  // Features with their circular positioning data
  const features = [
    {
      title: "AUTHENTIC SOUTH INDIAN CUISINE",
      description: "Our dishes are prepared using traditional recipes to bring you the true flavors of South India.",
      angle: 240 // 4 o'clock position
    },
    {
      title: "EXPERT CHEFS",
      description: "Our chefs have years of experience crafting exquisite South Indian dishes, ensuring every bite is a delight.",
      angle: 300 // 5 o'clock position
    },
    {
      title: "FRESH, QUALITY INGREDIENTS",
      description: "We use only the finest, fresh ingredients to ensure the highest quality and authentic taste in every meal.",
      angle: 0 // 6 o'clock position
    },
    {
      title: "COMFORTABLE DINING EXPERIENCE",
      description: "Our restaurant offers a warm and welcoming ambiance for a relaxed and enjoyable dining experience.",
      angle: 60 // 7 o'clock position
    },
    {
      title: "HEALTH-CONSCIOUS OPTIONS",
      description: "From vegetarian to gluten-free dishes, we provide healthy options without compromising on flavor.",
      angle: 120 // 8 o'clock position
    },
    {
      title: "SEAMLESS ONLINE ORDERING & DELIVERY",
      description: "Enjoy your favorite dishes at home with our easy online ordering and fast delivery service.",
      angle: 180 // 9 o'clock position
    }
  ]

  // Function to calculate position based on angle and radius
  const getPosition = (angle) => {
    const radius = 300; // Adjust this value to control the circle size
    const radian = (angle * Math.PI) / 180;
    return {
      left: `calc(50% + ${radius * Math.cos(radian)}px)`,
      top: `calc(50% + ${radius * Math.sin(radian)}px)`,
      transform: `translate(-50%, -50%) rotate(${angle}deg)` // Center the element
    };
  }

  return (
    <section className="specialties-section">
      <h4 className="subtitle">WHY TIFFIN BOX</h4>
      <h2 className="specialties-heading">OUR SPECIALTIES</h2>
      
      <div className="specialties-content">
        <div className="features-circle">
          {/* Central image */}
          <div className="central-image">
            <img src="/specialities.png" alt="South Indian Dish" />
          </div>
          
          {/* Circle outline */}
          <div className="circle-outline"></div>
          
          {/* Features positioned in a circle */}
          {features.map((feature, index) => {
            const styles = getPosition(feature.angle);
            return (
              <div 
                key={index}
                className="feature-item"
                style={styles}
              >
                <div className="feature-content" style={{ transform: `rotate(-${feature.angle}deg)` }}>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <button className="specialties-button">
        <span className="specialties-icon">→</span>
        OUR SPECIALTIES
      </button>
    </section>
  )
}
