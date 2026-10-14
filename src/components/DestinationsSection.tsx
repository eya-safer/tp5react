import { Button, Col, Row, Form } from 'react-bootstrap'
import { DestinationCard } from './DestinationCard'
import type { Destination } from '../types'

type DestinationsSectionProps = {
  destinations: Destination[]
  minimumRating: string
  onMinimumRatingChange: (rating: string) => void
  onAddDestination: () => void
  onResetFilters: () => void
}

export function DestinationsSection({
  destinations,
  minimumRating,
  onMinimumRatingChange,
  onAddDestination,
  onResetFilters,
}: DestinationsSectionProps) {
  return (
    <section
      className="destinations-section"
      aria-labelledby="destinations-title"
    >
      <div className="section-heading">
        <div>
          <span className="section-kicker">VOTRE PROCHAIN DÉPART</span>
          <h2 id="destinations-title">Destinations à découvrir</h2>
          <p className="results-count">
            {destinations.length}{' '}
            {destinations.length > 1
              ? 'escapades à explorer'
              : 'escapade à explorer'}
          </p>
        </div>
        <Button
          className="add-button"
          onClick={onAddDestination}
          type="button"
        >
          <span className="add-icon" aria-hidden="true">+</span>
          Ajouter une destination
        </Button>
      </div>

      <div className="filters-panel">
        <Form.Group className="rating-filter" controlId="rating-filter">
          <Form.Label>Nombre d’étoiles</Form.Label>
          <div
            className="rating-stars"
            role="group"
            aria-label="Choisir le nombre exact d’étoiles"
          >
            {[1, 2, 3, 4, 5].map((rating) => {
              const selectedRating = Number(minimumRating)
              const isSelected = selectedRating >= rating

              return (
                <Button
                  key={rating}
                  className={`rating-star${isSelected ? ' is-selected' : ''}`}
                  variant="link"
                  type="button"
                  aria-label={`${rating} étoile${rating > 1 ? 's' : ''}`}
                  aria-pressed={selectedRating === rating}
                  onClick={() =>
                    onMinimumRatingChange(
                      selectedRating === rating ? '0' : String(rating),
                    )
                  }
                >
                  <span aria-hidden="true">{isSelected ? '★' : '☆'}</span>
                </Button>
              )
            })}
          </div>
        </Form.Group>
      </div>

      {destinations.length > 0 ? (
        <Row className="destination-grid">
          {destinations.map((destination) => (
            <Col key={destination.id} xs={12} sm={6} lg={4}>
              <DestinationCard destination={destination} />
            </Col>
          ))}
        </Row>
      ) : (
        <div className="empty-state">
          <span className="empty-icon" aria-hidden="true">⌕</span>
          <h3>Aucune destination trouvée</h3>
          <p>
            Essayez un autre titre ou choisissez un autre nombre d’étoiles.
          </p>
          <Button variant="link" onClick={onResetFilters}>
            Réinitialiser les filtres
          </Button>
        </div>
      )}
    </section>
  )
}
