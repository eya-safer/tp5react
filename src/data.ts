import type { Destination, DestinationFormData, HeroSlide } from './types'

export const initialDestinations: Destination[] = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1000&q=85',
    title: 'Paris, France',
    description:
      'Flânez le long de la Seine, découvrez les petites rues de Montmartre et admirez la Ville Lumière.',
    price: 890,
    rating: 4.9,
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1000&q=85',
    title: 'Santorin, Grèce',
    description:
      'Maisons blanches, eaux cristallines et couchers de soleil inoubliables sur la mer Égée.',
    price: 1240,
    rating: 4.8,
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1000&q=85',
    title: 'Cinque Terre, Italie',
    description:
      'Cinq villages colorés accrochés aux falaises, reliés par des sentiers face à la Méditerranée.',
    price: 760,
    rating: 4.7,
  },
  {
    id: 4,
    image:
      'https://images.unsplash.com/photo-1513735492246-483525079686?auto=format&fit=crop&w=1000&q=85',
    title: 'Marrakech, Maroc',
    description:
      'Explorez les souks animés, les jardins secrets et les palais de la ville ocre.',
    price: 640,
    rating: 4.6,
  },
  {
    id: 5,
    image:
      'https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=1000&q=85',
    title: 'Bali, Indonésie',
    description:
      'Entre rizières émeraude, temples paisibles et plages tropicales, place à l’évasion.',
    price: 1580,
    rating: 4.9,
  },
  {
    id: 6,
    image:
      'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?auto=format&fit=crop&w=1000&q=85',
    title: 'Kyoto, Japon',
    description:
      'Temples anciens, maisons traditionnelles et chemins bordés de cerisiers en fleurs.',
    price: 1720,
    rating: 4.5,
  },
]

export const heroSlides: HeroSlide[] = [
  { image: '/istanbul_novembre.webp', alt: 'Offre de voyage organisé à Istanbul' },
  { image: '/kahra.webp', alt: 'Offre de séjour au Caire' },
  { image: '/slide-club-med.webp', alt: 'Séjour au Club Med à la montagne' },
  { image: '/slide-octobre.webp', alt: 'Offre spéciale pour les vacances d’octobre' },
  { image: '/slide_vietnam.webp', alt: 'Voyage organisé au Vietnam' },
]

export const emptyFormData: DestinationFormData = {
  image: '',
  title: '',
  description: '',
  price: '',
  rating: '5',
}
