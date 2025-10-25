import React from 'react'
import '../styles/newsletterFooter.css'

const NewsletterFooter = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle newsletter submission
  }

  return (
    <footer className="newsletter-footer">
      <div className="footer-content">
        {/* Logo */}
        <div className="footer-logo">
          <img src="/tiffin-box.png" alt="The Tiffin Box" className="logo" />
        </div>

        {/* Newsletter Section */}
        <div className="newsletter-section">
          <h2 className="section-heading">
            <span className="heading-line">SUBSCRIBE TO</span>
            <span className="heading-line">OUR NEWSLETTER</span>
          </h2>

          <form onSubmit={handleSubmit} className="newsletter-form">
            <div className="input-group">
              <label htmlFor="email" className="input-label">EMAIL ADDRESS</label>
              <div className="input-with-button">
                <input 
                  type="email" 
                  id="email" 
                  placeholder="Email Address"
                  className="email-input"
                  required
                />
                <button type="submit" className="subscribe-button">
                  Subscribe <span className="button-arrow">→</span>
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Contact Information */}
        <div className="contact-section">
          <h3 className="contact-label">CONTACT U</h3>
          <div className="contact-info">
            <p>0151 245 1400</p>
            <a href="mailto:INFO@TIFFINBOX.CO.UK">INFO@TIFFINBOX.CO.UK</a>
            <p>ALLERTON RD, LIVERPOOL L25 7RE</p>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="footer-nav">
          <ul>
            <li><a href="#menu">MENU</a></li>
            <li className="divider">|</li>
            <li><a href="#order">ORDER ONLINE</a></li>
            <li className="divider">|</li>
            <li><a href="#book">BOOK A TABLE</a></li>
            <li className="divider">|</li>
            <li><a href="#about">ABOUT US</a></li>
            <li className="divider">|</li>
            <li><a href="#contact">CONTACT U</a></li>
          </ul>
        </nav>

        {/* Copyright */}
        <div className="copyright">
          © {new Date().getFullYear()} Tiffinbox
        </div>
      </div>
    </footer>
  )
}

export default NewsletterFooter