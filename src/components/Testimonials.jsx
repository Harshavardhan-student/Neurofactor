import React from 'react'
import '../styles/testimonials.css'

const Testimonials = () => {
  const testimonials = [
    {
      text: "Bayette delivers an unforgettable steak experience! The food, service, and ambiance are second to none. We will definitely be coming",
      author: "Anna Mathew",
      avatar: "/avatar.png",
      rating: 5,
      time: "one day ago"
    },
    {
      text: "Bayette delivers an unforgettable steak experience! The food, service, and ambiance are second to none. We will definitely be coming back we booked private dining for our",
      author: "Gerrin Tom",
      avatar: "/avatar.png",
      rating: 5,
      time: "one day ago"
    },
    {
      text: "Bayette delivers an unforgettable steak experience! The food, service, and ambiance are second to none. We will definitely be coming back we",
      author: "Mery Elza",
      avatar: "/avatar.png",
      rating: 5,
      time: "one day ago"
    },
    {
      text: "Bayette delivers an unforgettable steak experience! The food, service, and ambiance are second to none. We will definitely be coming back we",
      author: "Mery Elza",
      avatar: "/avatar.png",
      rating: 5,
      time: "one day ago"
    }
  ]

  // Component to render star rating
  const StarRating = ({ rating }) => {
    return (
      <div className="star-rating">
        {[...Array(rating)].map((_, index) => (
          <span key={index} className="star">★</span>
        ))}
      </div>
    )
  }

  return (
    <section className="testimonials-section">
      <div className="section-content">
        {/* Section label */}
        <h4 className="section-label">TESTIMONIAL</h4>
        
        {/* Main heading - split into two lines */}
        <h2 className="section-heading">
          <span className="heading-line">WHAT OUR</span>
          <span className="heading-line">CUSTOMERS SAYS</span>
        </h2>
        
        {/* Testimonials container */}
        <div className="testimonials-container">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <StarRating rating={testimonial.rating} />
              
              <p className="testimonial-text">{testimonial.text}</p>
              
              <div className="testimonial-divider"></div>
              
              <div className="testimonial-author">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author} 
                  className="author-avatar"
                />
                <div className="author-info">
                  <h5 className="author-name">{testimonial.author}</h5>
                  <p className="post-time">{testimonial.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
