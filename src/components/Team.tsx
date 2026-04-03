'use client'
import { useEffect, useRef } from 'react'

const team = [
  { name: "Dr. Sarah O'Kane", role: 'Principal Dentist', spec: 'Cosmetic & General Dentistry', gdc: 'GDC: 123456', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80' },
  { name: 'Dr. James Doherty', role: 'Cosmetic Dentist', spec: 'Veneers & Teeth Whitening', gdc: 'GDC: 234567', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80' },
  { name: 'Dr. Ciara McLaughlin', role: 'Orthodontist', spec: 'Invisalign & Braces', gdc: 'GDC: 345678', image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=600&q=80' },
  { name: 'Emma Gallagher', role: 'Aesthetic Practitioner', spec: 'Dermal Fillers & Skin Boosters', gdc: 'ANB Registered', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80' },
]

export default function Team() {
  const sectionRef = useRef<HTMLElement>(null)
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach(el => el.classList.add('visible')); obs.unobserve(e.target) } })
    }, { threshold: 0.08 })
    if (sectionRef.current) obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="team" ref={sectionRef} style={{ background: '#0d1f35', padding: '120px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '72px' }}>
          <p style={{ fontFamily: 'Outfit', fontSize: '11px', fontWeight: 600, color: '#00d4b1', letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: '14px' }}>Our Team</p>
          <h2 style={{ fontFamily: 'Outfit', fontWeight: 900, fontSize: 'clamp(30px, 4vw, 52px)', color: 'white', letterSpacing: '-0.025em', lineHeight: 1.05, marginBottom: '20px' }}>
            The people behind<br />your smile
          </h2>
          <p style={{ fontFamily: 'Outfit', fontSize: '16px', color: 'rgba(255,255,255,0.4)', maxWidth: '440px', margin: '0 auto', lineHeight: 1.7 }}>
            Fully qualified, GDC registered and genuinely passionate about the work they do.
          </p>
        </div>

        {/* Team grid */}
        <div className="team-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
          {team.map((member, i) => (
            <div key={member.name} className={`reveal d${i + 1}`} style={{ position: 'relative' }}>
              <div className="team-card img-zoom" style={{
                position: 'relative', height: '380px', borderRadius: '20px',
                overflow: 'hidden', cursor: 'pointer',
                border: '1px solid rgba(255,255,255,0.06)',
              }}>
                <img src={member.image} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', transition: 'transform 0.5s ease' }} />
                {/* Permanent bottom gradient */}
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '50%', background: 'linear-gradient(to top, rgba(10,22,40,0.9) 0%, transparent 100%)' }} />
                {/* Hover overlay */}
                <div className="team-overlay">
                  <div style={{ width: '32px', height: '2px', background: '#00d4b1', marginBottom: '12px' }} />
                  <h3 style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: '17px', color: 'white', marginBottom: '4px' }}>{member.name}</h3>
                  <p style={{ fontFamily: 'Outfit', fontSize: '13px', color: '#00d4b1', marginBottom: '6px', fontWeight: 500 }}>{member.role}</p>
                  <p style={{ fontFamily: 'Outfit', fontSize: '12px', color: 'rgba(255,255,255,0.5)', marginBottom: '8px' }}>{member.spec}</p>
                  <p style={{ fontFamily: 'Outfit', fontSize: '11px', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.05em' }}>{member.gdc}</p>
                </div>
              </div>
              {/* Name always visible at bottom */}
              <div style={{ padding: '16px 4px 0' }}>
                <p style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: '15px', color: 'white', marginBottom: '2px' }}>{member.name}</p>
                <p style={{ fontFamily: 'Outfit', fontSize: '13px', color: '#00d4b1' }}>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
