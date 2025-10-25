import React from 'react'
import '../styles/bookTable.css'

export default function BookTable() {
  return (
    <section className="book-table">
      <div className="bt-container">
        <div className="bt-left">
          <img src="/dining-table.png" alt="Candlelit table with wine glasses" className="bt-image" />
        </div>

        <div className="bt-right">
          <small className="bt-kicker">BOOK TABLE</small>

          <h2 className="bt-title">
            PLANNING A<br />
            MEAL AT THE<br />
            TIFFIN BOX?
          </h2>

          <p className="bt-copy">
            Craving your favorite South Indian dishes? Enjoy the rich, authentic
            flavors of The Tiffin Box from the comfort of your home. Order online
            for a quick and easy delivery straight to your doorstep. Our dishes
            are prepared fresh and delivered fast, ensuring a delicious experience.
          </p>

          <a className="bt-cta" href="/book">
            <span>Book Table</span>
            <span className="bt-arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
