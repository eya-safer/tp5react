import { Card } from 'react-bootstrap'
import type { Destination } from '../types'

type DestinationCardProps = {
  destination: Destination
}

export function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <Card className="destination-card h-100">
      <div className="card-image-wrap">
        <Card.Img
          variant="top"
          src={destination.image}
          alt={destination.title}
        />
        <span className="price-tag">
          À partir de{' '}
          <strong>{destination.price.toLocaleString('fr-FR')} €</strong>
        </span>
      </div>
      <Card.Body>
        <div className="card-title-row">
          <Card.Title>{destination.title}</Card.Title>
          <span
            className="rating"
            aria-label={`Note : ${destination.rating} sur 5`}
          >
            <span aria-hidden="true">★</span>{' '}
            {destination.rating.toLocaleString('fr-FR')}
          </span>
        </div>
        <Card.Text>{destination.description}</Card.Text>
        <div className="card-footer-line">
          <span className="trip-label">
            <span aria-hidden="true">↗</span> L’AVENTURE VOUS ATTEND
          </span>
        </div>
      </Card.Body>
    </Card>
  )
}
