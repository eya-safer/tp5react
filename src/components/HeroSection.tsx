import { Form } from 'react-bootstrap'
import { TravelCarousel } from './TravelCarousel'

type HeroSectionProps = {
  search: string
  onSearchChange: (value: string) => void
}

export function HeroSection({ search, onSearchChange }: HeroSectionProps) {
  return (
    <section id="offres" className="hero-section" aria-label="Offres de voyage">
      <TravelCarousel />
      <div className="hero-search-wrap">
        <Form.Group className="hero-search-field" controlId="destination-search">
          <Form.Label className="visually-hidden">
            Rechercher une destination par son titre
          </Form.Label>
          <span className="search-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <circle cx="10.8" cy="10.8" r="6.3" stroke="currentColor" strokeWidth="1.8" />
              <path d="m15.5 15.5 4.2 4.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </span>
          <Form.Control
            type="search"
            placeholder="Où souhaitez-vous partir ?"
            value={search}
            onChange={(event) => onSearchChange(event.currentTarget.value)}
          />
        </Form.Group>
        <a className="search-submit" href="#destinations-title">
          Rechercher
        </a>
      </div>
    </section>
  )
}
