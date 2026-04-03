'use client'
import { useState, useEffect } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const links = [
    { label: 'Treatments', href: '#treatments' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Our Team', href: '#team' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <>
      <nav style={{
        position: 'fixed', top: '38px', left: 0, right: 0, zIndex: 100,
        background: scrolled ? 'rgba(28,32,40,0.97)' : 'rgba(28,32,40,0.2)',
        backdropFilter: 'blur(20px)',
        borderBottom: scrolled ? '1px solid rgba(0,212,177,0.15)' : '1px solid transparent',
        transition: 'background 0.35s ease, border-color 0.35s ease',
      }}>
        <div style={{
          maxWidth: '1200px', margin: '0 auto', padding: '0 24px',
          height: '68px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <a href="#" style={{ textDecoration: 'none' }}>
            <div style={{ fontFamily: 'Outfit', fontWeight: 800, fontSize: '19px', color: 'white', letterSpacing: '-0.02em' }}>
              Walled City <span style={{ color: '#00d4b1' }}>Dental</span>
            </div>
            <div style={{ fontFamily: 'Outfit', fontWeight: 400, fontSize: '10px', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.2em', textTransform: 'uppercase', marginTop: '1px' }}>
              & Aesthetics · Derry
            </div>
          </a>

          <div className="wcd-desktop" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            {links.map(link => (
              <a key={link.href} href={link.href} className="nav-link">{link.label}</a>
            ))}
            <button
              className="btn-teal"
              style={{ marginLeft: '20px', padding: '10px 24px', fontSize: '14px' }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book Now
            </button>
          </div>

          <button
            className="wcd-hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', display: 'flex', flexDirection: 'column', gap: '5px' }}
          >
            <span style={{ display: 'block', width: '26px', height: '2px', background: '#00d4b1', transition: 'transform 0.3s', transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none' }} />
            <span style={{ display: 'block', width: '26px', height: '2px', background: '#00d4b1', opacity: menuOpen ? 0 : 1, transition: 'opacity 0.3s' }} />
            <span style={{ display: 'block', width: '26px', height: '2px', background: '#00d4b1', transition: 'transform 0.3s', transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none' }} />
          </button>
        </div>
      </nav>

      <div style={{
        position: 'fixed', inset: 0, zIndex: 99,
        background: '#1c2028',
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-start',
        padding: '130px 40px 40px',
        opacity: menuOpen ? 1 : 0,
        transform: menuOpen ? 'none' : 'translateY(-12px)',
        transition: 'opacity 0.35s ease, transform 0.35s ease',
        pointerEvents: menuOpen ? 'all' : 'none',
      }}>
        {links.map(link => (
          <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} style={{
            fontFamily: 'Outfit', fontWeight: 700, fontSize: 'clamp(38px, 8vw, 60px)',
            color: 'white', textDecoration: 'none', lineHeight: 1,
            borderBottom: '1px solid rgba(255,255,255,0.08)',
            paddingBottom: '18px', paddingTop: '18px',
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = '#00d4b1')}
          onMouseLeave={e => (e.currentTarget.style.color = 'white')}
          >{link.label}</a>
        ))}
        <div style={{ marginTop: '40px', borderTop: '1px solid rgba(0,212,177,0.2)', paddingTop: '28px' }}>
          <p style={{ fontFamily: 'Outfit', fontSize: '11px', color: '#00d4b1', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '8px' }}>Book an appointment</p>
          <p style={{ fontFamily: 'Outfit', fontSize: '16px', color: 'white' }}>028 7136 0000</p>
        </div>
      </div>
    </>
  )
}
