import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import '../styles/hero.css'

export default function Hero() {
  return (
    <section className="hero-card" aria-labelledby="hero-heading">
      {/* Top bar inside the black card */}
      <div className="hero-top">
        <a className="hero-logo" href="/" aria-label="Tiffinbox home">
          <span className="logo-small">the</span>
          <span className="logo-big">tiffin box</span>
        </a>

        <a href="#menu" className="btn-accent" aria-label="View menu">
          View Menu <span className="arrow">→</span>
        </a>
      </div>

      {/* Main hero grid with integrated social icons */}
      <div className="hero-main container">
        <div className="hero-grid">
          <div className="hero-col hero-left">
            <div className="accent-vertical" aria-hidden="true" />

            <h1 id="hero-heading" className="hero-title">
              <span>AUTHENTIC</span>
              <span>SOUTH INDIAN</span>
              <span>CUISINE</span>
            </h1>

            <a href="#order" className="btn-outline" aria-label="Order now">
              Order Now <span className="btn-arrow">→</span>
            </a>
          </div>

          <div className="hero-col hero-center" aria-hidden="true">
            <div className="plate-wrap">
              <img src="/bowl.png" alt="Plate of food" className="plate-image" />
            </div>
          </div>

          <div className="hero-col hero-right">
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="icon fb">
                <FaFacebookF />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="icon ig">
                <FaInstagram />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="icon tw">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* About section continues directly below inside same black card */}
      <div className="about-row container">
        <div className="about-left">
          <img src="/chef-team.png" alt="Chef team" className="chef-image" />
        </div>

        <div className="about-right">
          <div className="about-card">
            <small className="kicker">ABOUT US</small>
            <h2 id="about-heading" className="about-title">
              <span>EXPERIENCE AUTHENTIC SOUTH INDIAN FLAVORS AT THE TIFFIN BOX</span>
            </h2>
            <p className="about-desc">
              At Tiffinbox we take pride in crafting traditional South Indian dishes using
              family recipes and fresh, locally sourced ingredients. From dosas to biryanis,
              every meal is prepared with care and flavour.
            </p>
            <a href="#about" className="btn-dark">Know More <span className="btn-arrow">→</span></a>
          </div>
        </div>
      </div>
    </section>
  )
}

