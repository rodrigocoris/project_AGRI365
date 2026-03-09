import { useState, useEffect } from 'react';

const screenshotSlots = [
  { id: 'screen-01', image: '/images/screen-01.png', title: 'Administración', summary: 'AGRI365' },
  { id: 'screen-02', image: '/images/screen-02.png', title: 'Administración', summary: 'AGRI365' },
  { id: 'screen-03', image: '/images/screen-03.png', title: 'Administración', summary: 'AGRI365' },
  { id: 'screen-04', image: '/images/screen-04.png', title: 'Administración', summary: 'AGRI365' },
  { id: 'screen-05', image: '/images/screen-05.png', title: 'Administración', summary: 'AGRI365' },
  { id: 'screen-06', image: '/images/screen-06.png', title: 'Administración', summary: 'AGRI365' },
  { id: 'screen-07', image: '/images/screen-07.png', title: 'Administración', summary: 'AGRI365' },
  { id: 'screen-08', image: '/images/screen-08.png', title: 'Administración', summary: 'AGRI365' },
  { id: 'screen-09', image: '/images/screen-09.png', title: 'Administración', summary: 'AGRI365' },
  { id: 'screen-10', image: '/images/screen-10.png', title: 'Administración', summary: 'AGRI365' },
  { id: 'screen-11', image: '/images/screen-11.png', title: 'Administración', summary: 'AGRI365' },
  { id: 'screen-12', image: '/images/screen-12.png', title: 'Administración', summary: 'AGRI365' },
  { id: 'screen-13', image: '/images/screen-13.png', title: 'Administración', summary: 'AGRI365' },
  { id: 'screen-14', image: '/images/screen-14.png', title: 'Administración', summary: 'AGRI365' },
  { id: 'screen-15', image: '/images/screen-15.png', title: 'Administración', summary: 'AGRI365' },
  { id: 'screen-16', image: '/images/screen-16.png', title: 'Configuración', summary: 'AGRI365' },
  { id: 'screen-17', image: '/images/screen-17.png', title: 'Configuración', summary: 'AGRI365' },
  { id: 'screen-18', image: '/images/screen-18.png', title: 'Configuración', summary: 'AGRI365' },
  { id: 'screen-19', image: '/images/screen-19.png', title: 'Configuración', summary: 'AGRI365' },
  { id: 'screen-20', image: '/images/screen-20.png', title: 'Configuración', summary: 'AGRI365' },
  { id: 'screen-21', image: '/images/screen-21.png', title: 'Configuración', summary: 'AGRI365' },
  { id: 'screen-22', image: '/images/screen-22.png', title: 'Configuración', summary: 'AGRI365' },
  { id: 'screen-23', image: '/images/screen-23.png', title: 'Configuración', summary: 'AGRI365' },
  { id: 'screen-24', image: '/images/screen-24.png', title: 'Configuración', summary: 'AGRI365' },
  { id: 'screen-25', image: '/images/screen-25.png', title: 'Recursos Humanos', summary: 'AGRI365' },
  { id: 'screen-26', image: '/images/screen-26.png', title: 'Recursos Humanos', summary: 'AGRI365' },
  { id: 'screen-27', image: '/images/screen-27.png', title: 'Recursos Humanos', summary: 'AGRI365' },
  { id: 'screen-28', image: '/images/screen-28.png', title: 'Recursos Humanos', summary: 'AGRI365' },
  { id: 'screen-29', image: '/images/screen-29.png', title: 'Recursos Humanos', summary: 'AGRI365' },
  { id: 'screen-30', image: '/images/screen-30.png', title: 'Recursos Humanos', summary: 'AGRI365' },
  { id: 'screen-31', image: '/images/screen-31.png', title: 'Recursos Humanos', summary: 'AGRI365' },
];

function App() {
  const [missingImages, setMissingImages] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);

  const markImageAsMissing = (id) => {
    setMissingImages((current) => ({
      ...current,
      [id]: true,
    }));
  };

  const openModal = (slot) => {
    setSelectedImage(slot);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    if (!selectedImage) return;
    const currentIndex = screenshotSlots.findIndex(s => s.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % screenshotSlots.length;
    } else {
      newIndex = (currentIndex - 1 + screenshotSlots.length) % screenshotSlots.length;
    }
    
    setSelectedImage(screenshotSlots[newIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      
      if (e.key === 'ArrowRight') {
        navigateImage('next');
      } else if (e.key === 'ArrowLeft') {
        navigateImage('prev');
      } else if (e.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  return (
    <div className="page-shell">
      <header className="hero">
        <div className="hero-icon-wrapper">
          <svg className="hero-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2L2 7l10 5 10-5-10-5z"/>
            <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
        </div>
        <p className="eyebrow">COAGRIN · Agrotech Solution</p>
        <h1>AGRI365</h1>
        <p className="hero-copy">
          Plataforma empresarial desarrollada con Microsoft Power Apps para optimizar 
          los procesos internos de las microempresas agrícolas de COAGRIN. Gestión integral 
          de compras, ventas, créditos y seguimiento operativo.
        </p>
      </header>

      <main className="content-grid">
        <section className="panel panel-description" aria-labelledby="descripcion-title">
          <div className="panel-header">
            <div className="panel-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="16" x2="12" y2="12"/>
                <line x1="12" y1="8" x2="12.01" y2="8"/>
              </svg>
            </div>
            <h2 id="descripcion-title">Descripcion de la Plataforma</h2>
          </div>
          <p>
            <strong>AGRI365</strong> es una plataforma empresarial desarrollada con Microsoft Power Apps
            para optimizar los procesos internos de las microempresas agrícolas de <strong>COAGRIN</strong>.
            Centraliza operaciones de compras, ventas, créditos y seguimiento en una sola experiencia digital.
          </p>
          
          <h3>Desarrollo y Características Técnicas</h3>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
              </div>
              <p>Desarrollo de aplicación empresarial (AGRI 365) con Microsoft Power Apps para optimizar procesos internos.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <line x1="9" y1="3" x2="9" y2="21"/>
                </svg>
              </div>
              <p>Diseño de interfaces frontend alineadas a necesidades de compras, ventas, créditos y seguimiento.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                </svg>
              </div>
              <p>Automatización de flujos con Power Automate, reduciendo tareas manuales y tiempos operativos.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                  <line x1="12" y1="22.08" x2="12" y2="12"/>
                </svg>
              </div>
              <p>Gestión e integración de datos mediante SharePoint Lists como backend.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <p>Colaboración con usuarios finales para pruebas, ajustes y mejoras continuas.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="16 18 22 12 16 6"/>
                  <polyline points="8 6 2 12 8 18"/>
                </svg>
              </div>
              <p>Implementación de buenas prácticas de usabilidad, productividad y mantenimiento.</p>
            </div>
          </div>
        </section>

        <section className="panel panel-gallery" aria-labelledby="galeria-title">
          <div className="section-head">
            <div className="panel-header">
              <div className="panel-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5"/>
                  <polyline points="21 15 16 10 5 21"/>
                </svg>
              </div>
              <h2 id="galeria-title">Recorrido por la Plataforma</h2>
            </div>
          </div>

          <div className="gallery-grid">
            {screenshotSlots.map((slot, index) => (
              <article
                key={slot.id}
                className="capture-card"
                style={{ '--delay': `${index * 90}ms` }}
              >
                {missingImages[slot.id] ? (
                  <div className="capture-placeholder" role="img" aria-label={slot.title}>
                    <span>Agrega captura aqui</span>
                  </div>
                ) : (
                  <div className="capture-image-wrapper" onClick={() => openModal(slot)}>
                    <img
                      className="capture-image"
                      src={slot.image}
                      alt={slot.title}
                      loading="lazy"
                      onError={() => markImageAsMissing(slot.id)}
                    />
                    <div className="image-overlay">
                      <svg
                        className="eye-icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    </div>
                  </div>
                )}
                <div className="capture-copy">
                  <h3>{slot.title}</h3>
                  <p>{slot.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="page-footer">
        <div className="footer-content">
          <p className="footer-text">
            <strong>AGRI365</strong> · Plataforma desarrollada por COAGRIN y Rodrigo Ramos
          </p>
          <p className="footer-year">{new Date().getFullYear()}</p>
        </div>
      </footer>

      {selectedImage && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal} aria-label="Cerrar">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            
            <button 
              className="modal-nav modal-nav-prev" 
              onClick={() => navigateImage('prev')}
              aria-label="Imagen anterior"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            
            <button 
              className="modal-nav modal-nav-next" 
              onClick={() => navigateImage('next')}
              aria-label="Imagen siguiente"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
            
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="modal-image"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
