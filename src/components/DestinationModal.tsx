import { Button, Col, Form, Modal, Row } from 'react-bootstrap'
import type { FormEvent } from 'react'
import type { DestinationFormData } from '../types'

type DestinationModalProps = {
  show: boolean
  formData: DestinationFormData
  onHide: () => void
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
  onFieldChange: (name: string, value: string) => void
}

export function DestinationModal({
  show,
  formData,
  onHide,
  onSubmit,
  onFieldChange,
}: DestinationModalProps) {
  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    onFieldChange(event.currentTarget.name, event.currentTarget.value)
  }

  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      dialogClassName="destination-modal"
    >
      <Form onSubmit={onSubmit}>
        <Modal.Header closeButton>
          <div>
            <span className="section-kicker">UNE NOUVELLE ESCAPADE</span>
            <Modal.Title>Ajouter une destination</Modal.Title>
          </div>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="destination-image">
            <Form.Label>URL de l’image</Form.Label>
            <Form.Control
              name="image"
              type="url"
              placeholder="https://exemple.com/image.jpg"
              value={formData.image}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="destination-title">
            <Form.Label>Titre</Form.Label>
            <Form.Control
              name="title"
              type="text"
              placeholder="Ex. Lisbonne, Portugal"
              value={formData.title}
              onChange={handleChange}
              maxLength={80}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="destination-description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              name="description"
              as="textarea"
              rows={3}
              placeholder="Décrivez ce qui rend cette destination unique..."
              value={formData.description}
              onChange={handleChange}
              maxLength={300}
              required
            />
          </Form.Group>
          <Row>
            <Col xs={6}>
              <Form.Group controlId="destination-price">
                <Form.Label>Prix (€)</Form.Label>
                <Form.Control
                  name="price"
                  type="number"
                  min="0"
                  step="1"
                  placeholder="850"
                  value={formData.price}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col xs={6}>
              <Form.Group controlId="destination-rating">
                <Form.Label>Note sur 5</Form.Label>
                <Form.Control
                  name="rating"
                  type="number"
                  min="0"
                  max="5"
                  step="0.1"
                  value={formData.rating}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" type="button" onClick={onHide}>
            Annuler
          </Button>
          <Button className="add-button" type="submit">
            Ajouter la destination
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}
