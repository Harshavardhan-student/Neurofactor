import React from 'react'
import '../styles/onlineOrder.css'

export default function OnlineOrder() {
  return (
    <section className="online-order">
      <div className="online-container">
        <div className="oo-left">
          <small className="oo-kicker">ONLINE ORDER</small>

          <h1 className="oo-title">
            FRESH SOUTH<br />
            INDIAN FLAVORS<br />
            DELIVERED!
          </h1>

          <p className="oo-copy">
            Craving your favorite South Indian dishes? Enjoy the rich, authentic
            flavors of The Tiffin Box from the comfort of your home. Order online
            for quick and reliable delivery straight to your door — meals prepared
            fresh and delivered fast for a delicious experience every time.
          </p>

          <a className="oo-cta" href="/order">
            <span>Order Online</span>
            <span className="oo-cta-arrow">→</span>
          </a>
        </div>

        <div className="oo-right" aria-hidden>
          {/* simple line-art scooter SVG (stroke-only) */}
          <svg className="scooter-art" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <g fill="none" stroke="#f9b93a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.85">
              <path d="M120 420c40-40 120-40 160 0" />
              <path d="M560 420c40-40 120-40 160 0" />
              <path d="M220 360c30 0 40-40 80-40s60 40 90 40c30 0 46-20 80-20s70 20 90 20" />
              <path d="M200 320c20-40 60-60 120-60" />
              <path d="M460 300c30-60 80-80 140-80" />
              <path d="M300 380c60-40 140-40 200 0" />
              <path d="M280 420a60 60 0 1 0 0.0001-0.0001" />
              <path d="M560 420a60 60 0 1 0 0.0001-0.0001" />
              <path d="M360 280l60-40 40 30" />
              <path d="M420 240l20 40" />
            </g>
          </svg>

          {/* Decorative order-art container: place accent SVG here (behind the dish) */}
          <div className="order-art" aria-hidden>
            <svg className="accent-scooter" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden>
              <g fill="none" stroke="#f9b93a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.95">
                <path d="M40 300c50-30 120-40 180-20s120 60 200 40" />
                <path d="M160 240c30-20 60-40 110-40" />
                <path d="M380 260c40-30 80-50 140-40" />
                <circle cx="140" cy="300" r="36" />
                <circle cx="440" cy="300" r="36" />
              </g>
            </svg>
          </div>

          {/* Dish image — circular and floating over the art */}
          <div className="oo-dish-wrap">
            <img
              src="/dish.png"
              alt="Delicious South Indian dish"
              className="oo-dish"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
