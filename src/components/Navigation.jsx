import { useEffect, useRef, useState } from 'react'
import '../styles/navigation.css'

const NAV_LINKS = [
  { href: '#menu', label: 'MENU' },
  { href: '#order', label: 'ORDER ONLINE' },
  { href: '#book', label: 'BOOK A TABLE' },
  { href: '#about', label: 'ABOUT US' },
  { href: '#contact', label: 'CONTACT US' },
]

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const menuRef = useRef(null)
  const firstLinkRef = useRef(null)

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape' && open) setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  useEffect(() => {
    // prevent body scroll when mobile menu is open
    document.body.style.overflow = open ? 'hidden' : ''
    if (open) {
      // focus first link for accessibility
      requestAnimationFrame(() => {
        firstLinkRef.current?.focus()
      })
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  function toggleMenu() {
    setOpen((v) => !v)
  }

  function closeMenu() {
    setOpen(false)
  }

  return (
    <nav className="site-nav" role="navigation" aria-label="Main navigation">
      <div className="container nav-inner">
        <a className="logo" href="/" aria-label="Tiffinbox home">
          <span className="logo-text">the tiffin box</span>
        </a>

        <button
          className={`hamburger ${open ? 'is-active' : ''}`}
          aria-controls="mobile-menu"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={toggleMenu}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className="nav-links" role="menubar">
          {NAV_LINKS.map((l) => (
            <li key={l.label} role="none">
              <a role="menuitem" href={l.href} className="nav-link">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile menu + backdrop */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`mobile-menu ${open ? 'open' : ''}`}
        role="dialog"
        aria-modal={open}
        aria-hidden={!open}
      >
        <div className="mobile-menu-inner container">
          <ul className="mobile-links">
            {NAV_LINKS.map((l, i) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  ref={i === 0 ? firstLinkRef : null}
                  className="mobile-link"
                  onClick={closeMenu}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        className={`backdrop ${open ? 'visible' : ''}`}
        onClick={closeMenu}
        aria-hidden={!open}
      />
    </nav>
  )
}
