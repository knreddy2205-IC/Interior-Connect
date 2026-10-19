import { useState } from 'react'
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material'

const services = [
  {
    title: 'Interior designer match',
    text: 'We connect you with the right designer based on your room type, style preference, budget, and delivery timeline.',
    tag: '01',
    bullets: ['Style-based matching', 'Budget-conscious options', 'Timeline-aligned shortlists'],
  },
  {
    title: 'Interior services',
    text: 'From repairs and finishing to deep cleaning to maintenance, we help organize the practical work behind every beautiful home.',
    tag: '02',
    bullets: ['Repair and finishing support', 'Cleaning and maintenance', 'Service coordination'],
  },
  {
    title: 'Inspection support',
    text: 'Review progress, quality, and handover details with a clearer process to reduce friction before final delivery.',
    tag: '03',
    bullets: ['Progress review', 'Quality checks', 'Handover guidance'],
  },
]

const steps = [
  {
    step: '01',
    title: 'Share the brief',
    text: 'Tell us your project needs, style direction, and the kind of help you want.',
  },
  {
    step: '02',
    title: 'Get matched',
    text: 'We connect you with the right designer or partner based on the brief.',
  },
  {
    step: '03',
    title: 'Review & plan',
    text: 'Align on requirements, scope, and execution before work begins.',
  },
  {
    step: '04',
    title: 'Move forward',
    text: 'Stay informed, organized, and supported from start to completion.',
  },
]

export default function App() {
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-mark">IC</div>
          <div className="brand-name">Interior Connect</div>
        </div>

        <nav className="nav">
          <a href="#services">Services</a>
          <a href="#process">How it works</a>
          <a href="#contact">Contact</a>
        </nav>

        <button className="login-btn" onClick={handleOpen}>Login</button>
      </header>

      <div className="page-shell">
        <main className="hero">
          <div className="hero-copy">
            <span className="eyebrow">Curated interiors. Connected support.</span>
            <h1>
              More clarity.
              <br />
              Better matches.
              <br />
              Smoother interiors.
            </h1>

            <p>
              We are not interior designers ourselves — we are the service platform that connects
              homeowners with trusted design professionals, repair specialists, and inspection support.
            </p>

            <div className="hero-actions">
              <button className="primary-btn">Upload plan</button>
              <button className="secondary-btn">Book a call</button>
            </div>

            <div className="hero-metrics">
              <div>
                <strong>3</strong>
                <span>core services</span>
              </div>
              <div>
                <strong>1:1</strong>
                <span>matching support</span>
              </div>
              <div>
                <strong>Fast</strong>
                <span>shortlist flow</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="image-panel">
              <img
                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80"
                alt="Luxury interior living room"
              />
            </div>

            <div className="floating-card">
              <span>Best match</span>
              <strong>5 designers</strong>
              <small>ready for your brief</small>
            </div>
          </div>
        </main>

        <section id="services" className="services-section">
          <div className="section-heading">
            <span>What we do</span>
            <h2>Three services built around better decisions.</h2>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article key={service.title} className="service-card">
                <div className="service-tag">{service.tag}</div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <ul className="service-list">
                  {service.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="experience-section">
          <div className="experience-media">
            <img
              src="https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80"
              alt="Modern interior space"
            />
          </div>

          <div className="experience-copy">
            <span className="eyebrow muted">Why people use us</span>
            <h2>Built to simplify the messy middle.</h2>
            <p>
              Interior projects often fail because the right people never connect at the right time.
              We create that bridge between customers, designers, and service partners.
            </p>

            <ul className="feature-list">
              <li>Clear communication between all parties</li>
              <li>Faster designer and service matching</li>
              <li>More confidence before spending on work</li>
            </ul>
          </div>
        </section>

        <section id="process" className="process-section">
          <div className="section-heading center">
            <span>How it works</span>
            <h2>Simple, structured, and human.</h2>
          </div>

          <div className="process-grid">
            {steps.map((item) => (
              <article key={item.step} className="process-card">
                <div className="process-number">{item.step}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="audience-section">
          <article className="audience-card customer-card">
            <span className="chip">For customers</span>
            <h3>Get trusted support without the chaos.</h3>
            <ul>
              <li>Designer recommendations</li>
              <li>Repair and inspection help</li>
              <li>Streamlined project coordination</li>
            </ul>
          </article>

          <article className="audience-card partner-card">
            <span className="chip alt">For partners</span>
            <h3>Better leads and clearer collaboration.</h3>
            <ul>
              <li>Verified project requests</li>
              <li>More transparent communication</li>
              <li>Smarter execution planning</li>
            </ul>
          </article>
        </section>

        <footer id="contact" className="footer-shell">
          <div className="footer-top">
            <div>
              <span className="mini-label">Stay in the loop</span>
              <h3>Inside stories, smart updates, and fresh design inspiration.</h3>
            </div>

            <div className="subscribe-box">
              <input type="email" placeholder="Your email address" />
              <button className="primary-btn small">Subscribe</button>
            </div>
          </div>

          <div className="footer-meta">
            <div>
              <p className="footer-brand">Interior Connect</p>
              <p>Premium coordination for customers, designers, and interior service partners.</p>
            </div>

            <div>
              <p className="meta-title">Contact</p>
              <p>hello@interiorconnect.com</p>
              <p>+91 98765 43210</p>
            </div>

            <div>
              <p className="meta-title">Location</p>
              <p>Hyderabad, India</p>
            </div>
          </div>
        </footer>
      </div>

      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ fontSize: '2.2rem', fontWeight: 500, lineHeight: 1.1, pb: 1.25 }}>
          Login
        </DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ display: 'grid', gap: 1.8, pt: 0.5, pb: 1.2 }}>
            <TextField label="First Name" size="small" variant="outlined" fullWidth />
            <TextField label="Last Name" size="small" variant="outlined" fullWidth />
            <TextField label="Email" type="email" size="small" variant="outlined" fullWidth />
            <TextField label="Phone Number" type="tel" size="small" variant="outlined" fullWidth />
          </Box>
        </DialogContent>
        <DialogActions sx={{ px: 2.5, pb: 2.5, pt: 1.5, justifyContent: 'flex-end', gap: 1.25 }}>
          <Button onClick={handleClose} sx={{ minWidth: 110, fontSize: '0.95rem' }}>Cancel</Button>
          <Button variant="contained" onClick={handleClose} sx={{ minWidth: 120, fontSize: '0.95rem' }}>Submit</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
