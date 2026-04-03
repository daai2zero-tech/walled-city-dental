import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Walled City Dental & Aesthetics | Derry',
  description: 'Premium private dental and aesthetics clinic inside the historic Derry city walls. Teeth whitening, Invisalign, veneers, dermal fillers and more.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Demo Banner */}
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 9999,
          background: '#0a1628',
          borderBottom: '1px solid rgba(0,212,177,0.3)',
          color: '#00d4b1',
          textAlign: 'center', padding: '9px',
          fontSize: '12px', fontWeight: 600, letterSpacing: '0.08em',
          fontFamily: "'Outfit', sans-serif",
        }}>
          DEMO SITE — Built by Derry Digital&nbsp;&nbsp;|&nbsp;&nbsp;derrydigital.co.uk
        </div>
        <div style={{ height: '38px' }} />
        {children}
      </body>
    </html>
  )
}
