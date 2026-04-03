'use client'
import { useState, useEffect } from 'react'

export default function MobileBookBar() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const fn = () => setShow(window.scrollY > 300)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <div className="wcd-mobile-only" style={{
      position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 200,
      background: '#0a1628',
      borderTop: '1px solid rgba(0,212,177,0.2)',
      padding: '12px 20px',
      display: 'flex', gap: '12px', alignItems: 'center',
      transform: show ? 'none' : 'translateY(100%)',
      transition: 'transform 0.35s ease',
    }}>
      <a href="tel:02871360000" style={{ flex: 1, textDecoration: 'none' }}>
        <button style={{ width: '100%', padding: '12px', borderRadius: '100px', fontFamily: 'Outfit', fontWeight: 600, fontSize: '14px', cursor: 'pointer', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.7)' }}>
          Call Us
        </button>
      </a>
      <button className="btn-teal" style={{ flex: 2, padding: '12px 20px', fontSize: '14px' }}
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
      >
        Book Free Consultation
      </button>
    </div>
  )
}
