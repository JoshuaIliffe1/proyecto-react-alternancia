/**
 * Gallery.jsx — Exercise 3
 * Interactive image gallery: thumbnails + main image.
 * Clicking a thumbnail updates the main image using useState.
 * The selected thumbnail is visually highlighted via the "selected" CSS class.
 */
import { useState } from 'react'

/** Images array — each entry has id, src (Picsum placeholder), and alt text */
const IMAGES = [
  { id: 1, src: 'https://picsum.photos/seed/arch/800/500',   alt: 'Arquitectura moderna', label: 'Arquitectura' },
  { id: 2, src: 'https://picsum.photos/seed/nature/800/500', alt: 'Naturaleza',           label: 'Naturaleza'   },
  { id: 3, src: 'https://picsum.photos/seed/city/800/500',   alt: 'Ciudad',               label: 'Ciudad'       },
  { id: 4, src: 'https://picsum.photos/seed/tech/800/500',   alt: 'Tecnología',           label: 'Tecnología'   },
  { id: 5, src: 'https://picsum.photos/seed/ocean/800/500',  alt: 'Océano',               label: 'Océano'       },
]

function Gallery() {
  // selectedId tracks which image is shown as the main image
  const [selectedId, setSelectedId] = useState(IMAGES[0].id)

  const selectedImage = IMAGES.find(img => img.id === selectedId)

  return (
    <div className="gallery-container">
      {/* Main display image */}
      <div className="gallery-main-image-wrapper">
        <img
          src={selectedImage.src}
          alt={selectedImage.alt}
          key={selectedId}  /* key forces re-render so the fade transition triggers */
        />
      </div>

      <p className="gallery-caption">{selectedImage.label}</p>

      {/* Thumbnail strip — selected thumbnail gets the "selected" class */}
      <div className="gallery-thumbnails">
        {IMAGES.map(img => (
          <button
            key={img.id}
            className={`gallery-thumbnail${img.id === selectedId ? ' selected' : ''}`}
            onClick={() => setSelectedId(img.id)}
            aria-label={`Ver ${img.label}`}
            aria-pressed={img.id === selectedId}
          >
            <img src={img.src} alt={img.alt} />
          </button>
        ))}
      </div>
    </div>
  )
}

export default Gallery
