import React from 'react'
import '../styles/featuredMenu.css'

const featuredDishes = [
  {
    id: 1,
    name: 'CHICKEN CHETTINAD',
    price: '£12.99',
    image: 'chicken3.png'
  },
  {
    id: 2,
    name: 'HYDERABADI BIRYANI',
    price: '£14.99',
    image: 'chicken1.png'
  },
  {
    id: 3,
    name: 'BUTTER CHICKEN',
    price: '£13.99',
    image: '/chicken.png'
  }
]

export default function FeaturedMenu() {
  return (
    <section className="featured-menu">
      <div className="container">
        <small className="featured-kicker">FEATURED MENU</small>
        <h2 className="featured-title">
          DISCOVER OUR MOST<br />
          POPULAR DISHES
        </h2>

        <div className="featured-grid">
          {featuredDishes.map((dish, index) => (
            <div 
              key={dish.id} 
              className={`featured-card ${index === 1 ? 'featured-card-center' : ''}`}
            >
              {/* Watermark text (visible only on center card) */}
              {index === 1 && (
                <div className="card-watermark" aria-hidden="true">
                  <span>the</span>
                  <span>tiffin box</span>
                </div>
              )}
              
              {/* Circular food image with shadow */}
              <div className="food-image-wrap">
                <img 
                  src={dish.image} 
                  alt={dish.name}
                  className="food-image"
                />
              </div>

              {/* Dish details */}
              <h3 className="dish-name">{dish.name}</h3>
              <p className="dish-price">{dish.price}</p>
            </div>
          ))}
        </div>

        <a href="/menu" className="btn-explore">
          Explore Full Menu <span className="btn-arrow">→</span>
        </a>
      </div>
    </section>
  )
}
