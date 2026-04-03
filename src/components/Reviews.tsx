'use client'
import { useEffect, useRef, useState } from 'react'

const reviews = [
  { text: "I was so nervous about getting veneers but the team made me feel completely at ease. The results are absolutely stunning — I genuinely can't stop smiling.", name: 'Aoife M.', treatment: 'Composite Veneers' },
  { text: "Went in for teeth whitening and came out a totally different person. Professional, friendly, and the results were beyond what I expected. Would 100% recommend.", name: 'Ciarán D.', treatment: 'Teeth Whitening' },
  { text: "Best dental experience I've ever had. They explained everything clearly, didn't rush me, and the dermal fillers look so natural. Absolutely love it.", name: 'Niamh F.', treatment: 'Dermal Fillers' },
  { text: "Started Invisalign six months ago and I'm already seeing incredible results. The team checks in regularly and are always on hand to answer questions.", name: 'Seán O\'K.', treatment: 'Invisalign' },
  { text: "From the moment I walked in I felt welcome. The clinic is spotless, the staff are brilliant, and my smile has never looked better. 10 out of 10!", name: 'Sinéad B.', treatment: 'Smile Makeover' },
]

export default function Reviews() {
  const sectionRef = useRef<HTMLElement>(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach(el => el.classList.add('visible')); obs.unobserve(e.target) } })
    }, { threshold: 0.08 })
    if (sectionRef.current) obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  // Auto-advance
  useEffect(() => {
    const t = setInterval(() => setActive(a => (a + 1) % reviews.length), 5000)
    return () => clearInterval(t)
  }, [])

  return (
    <section id="reviews" ref={sectionRef} style={{ background: '#f5f5f7', padding: '120px 0', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div className="reveal" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px', marginBottom: '64px' }}>
          <div>
            <p style={{ fontFamily: 'Outfit', fontSize: '11px', fontWeight: 600, color: '#00d4b1', letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: '14px' }}>Patient Reviews</p>
            <h2 style={{ fontFamily: 'Outfit', fontWeight: 900, fontSize: 'clamp(30px, 4vw, 52px)', color: '#1c2028', letterSpacing: '-0.025em', lineHeight: 1.05 }}>
              What our patients<br />say about us
            </h2>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'Outfit', fontWeight: 900, fontSize: '48px', color: '#00d4b1', letterSpacing: '-0.03em', lineHeight: 1 }}>5.0</div>
              <div style={{ color: '#00d4b1', fontSize: '18px', marginTop: '4px' }}>&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <div style={{ fontFamily: 'Outfit', fontSize: '12px', color: '#94a3b8', marginTop: '4px' }}>Google Reviews</div>
            </div>
          </div>
        </div>

        {/* Featured review — large */}
        <div className="reveal" style={{
          background: '#1c2028', borderRadius: '28px', padding: '56px 64px',
          position: 'relative', overflow: 'hidden', marginBottom: '32px',
        }}>
          <div style={{ position: 'absolute', top: '-20px', left: '40px', fontFamily: 'Georgia, serif', fontSize: '160px', color: 'rgba(0,212,177,0.08)', lineHeight: 1, userSelect: 'none' }}>&ldquo;</div>
          <div style={{ position: 'relative', zIndex: 1, minHeight: '100px' }}>
            <p style={{ fontFamily: 'Outfit', fontSize: 'clamp(18px, 2.5vw, 26px)', fontWeight: 400, color: 'white', lineHeight: 1.6, letterSpacing: '-0.01em', marginBottom: '32px', maxWidth: '800px' }}>
              &ldquo;{reviews[active].text}&rdquo;
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#00d4b1', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Outfit', fontWeight: 700, fontSize: '16px', color: '#1c2028' }}>
                {reviews[active].name[0]}
              </div>
              <div>
                <div style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: '15px', color: 'white' }}>{reviews[active].name}</div>
                <div style={{ fontFamily: 'Outfit', fontSize: '12px', color: '#00d4b1', marginTop: '2px' }}>{reviews[active].treatment}</div>
              </div>
              <div style={{ marginLeft: 'auto', color: '#00d4b1', fontSize: '16px' }}>&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {reviews.map((_, i) => (
            <button key={i} onClick={() => setActive(i)} style={{
              width: active === i ? '32px' : '8px', height: '8px',
              borderRadius: '100px',
              background: active === i ? '#00d4b1' : 'rgba(0,212,177,0.2)',
              border: 'none', cursor: 'pointer', padding: 0,
              transition: 'all 0.3s ease',
            }} />
          ))}
          <span style={{ marginLeft: 'auto', fontFamily: 'Outfit', fontSize: '13px', color: '#94a3b8' }}>
            {active + 1} / {reviews.length}
          </span>
        </div>
      </div>
    </section>
  )
}
