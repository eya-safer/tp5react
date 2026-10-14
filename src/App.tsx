import { useMemo, useState, type FormEvent } from 'react'
import './App.css'
import { DestinationModal } from './components/DestinationModal'
import { DestinationsSection } from './components/DestinationsSection'
import { HeroSection } from './components/HeroSection'
import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/SiteHeader'
import { emptyFormData, initialDestinations } from './data'
import type { Destination, DestinationFormData } from './types'

function App() {
  const [destinations, setDestinations] = useState(initialDestinations)
  const [search, setSearch] = useState('')
  const [minimumRating, setMinimumRating] = useState('0')
  const [showModal, setShowModal] = useState(false)
  const [formData, setFormData] = useState<DestinationFormData>(emptyFormData)

  const filteredDestinations = useMemo(() => {
    const normalizedSearch = search.trim().toLocaleLowerCase('fr')
    const ratingThreshold = Number(minimumRating)

    return destinations.filter(
      (destination) =>
        destination.title.toLocaleLowerCase('fr').includes(normalizedSearch) &&
        (ratingThreshold === 0 ||
          Math.floor(destination.rating) === ratingThreshold),
    )
  }, [destinations, minimumRating, search])

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const newDestination: Destination = {
      id: Date.now(),
      image: formData.image.trim(),
      title: formData.title.trim(),
      description: formData.description.trim(),
      price: Number(formData.price),
      rating: Number(formData.rating),
    }

    setDestinations((currentDestinations) => [
      newDestination,
      ...currentDestinations,
    ])
    setSearch('')
    setMinimumRating('0')
    setFormData(emptyFormData)
    setShowModal(false)
  }

  function handleFieldChange(name: string, value: string) {
    setFormData((currentForm) => ({ ...currentForm, [name]: value }))
  }

  function resetFilters() {
    setSearch('')
    setMinimumRating('0')
  }

  return (
    <div className="app-shell">
      <SiteHeader />
      <main id="top">
        <HeroSection search={search} onSearchChange={setSearch} />
        <DestinationsSection
          destinations={filteredDestinations}
          minimumRating={minimumRating}
          onMinimumRatingChange={setMinimumRating}
          onAddDestination={() => setShowModal(true)}
          onResetFilters={resetFilters}
        />
      </main>
      <SiteFooter />
      <DestinationModal
        show={showModal}
        formData={formData}
        onHide={() => setShowModal(false)}
        onSubmit={handleSubmit}
        onFieldChange={handleFieldChange}
      />
    </div>
  )
}

export default App
