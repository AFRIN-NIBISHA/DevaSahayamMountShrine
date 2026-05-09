import React, { useState } from 'react';
import { Play } from 'lucide-react';

const galleryItems = [
  { id: 1, type: 'photo', url: 'https://images.unsplash.com/photo-1548625361-ec849202ca8b?q=80&w=800&auto=format&fit=crop', title: 'Shrine Altar' },
  { id: 2, type: 'photo', url: 'https://images.unsplash.com/photo-1543884844-3c6604a5585b?q=80&w=800&auto=format&fit=crop', title: 'Evening Mass' },
  { id: 3, type: 'video', url: 'https://images.unsplash.com/photo-1514896856000-91cb6de818e0?q=80&w=800&auto=format&fit=crop', title: 'Feast Celebration', videoId: 'feast' },
  { id: 4, type: 'photo', url: 'https://images.unsplash.com/photo-1560067674-89c0bf10e402?q=80&w=800&auto=format&fit=crop', title: 'Statue of St. Devasahayam' },
  { id: 5, type: 'photo', url: 'https://images.unsplash.com/photo-1572005086431-721db5975eb7?q=80&w=800&auto=format&fit=crop', title: 'Pilgrimage Group' },
  { id: 6, type: 'video', url: 'https://images.unsplash.com/photo-1601244018265-a6e54f7a77d8?q=80&w=800&auto=format&fit=crop', title: 'Chariot Procession', videoId: 'chariot' },
  { id: 7, type: 'photo', url: 'https://images.unsplash.com/photo-1438032005730-c7a3e014b23c?q=80&w=800&auto=format&fit=crop', title: 'Church Architecture' },
  { id: 8, type: 'photo', url: 'https://images.unsplash.com/photo-1437604620577-ffc45df082a9?q=80&w=800&auto=format&fit=crop', title: 'Morning Prayer' },
  { id: 9, type: 'video', url: 'https://images.unsplash.com/photo-1447023029226-ef8f6b52e3ea?q=80&w=800&auto=format&fit=crop', title: 'Choir Singing', videoId: 'choir' }
];

const Gallery = () => {
  const [filter, setFilter] = useState('all');

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.type === filter);

  return (
    <div className="page-wrapper">
      <div className="page-header text-center animate-fade-in" style={{ paddingTop: '130px', paddingBottom: '30px' }}>
        <h1 className="hero-title" style={{ fontSize: '3.5rem' }}>Sacred Gallery</h1>
        <p className="section-subtitle" style={{ color: 'var(--text-main)', maxWidth: '800px', margin: '0 auto 1.5rem' }}>
          Witness the divine moments and sacred memories of our beloved shrine through these blessed captures
        </p>
      </div>

      <section className="gallery-section" style={{ padding: '2rem', maxWidth: '1400px', margin: '0 auto', minHeight: '60vh' }}>
        
        {/* Filter Tabs */}
        <div className="gallery-filters" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem' }}>
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
            style={{
              padding: '10px 30px',
              background: filter === 'all' ? 'var(--secondary-color)' : 'transparent',
              color: filter === 'all' ? '#000' : 'var(--secondary-color)',
              border: '1px solid var(--secondary-color)',
              borderRadius: '25px',
              fontFamily: 'var(--font-heading)',
              fontWeight: 'bold',
              transition: 'all 0.3s ease'
            }}
          >
            All
          </button>
          <button 
            className={`filter-btn ${filter === 'photo' ? 'active' : ''}`}
            onClick={() => setFilter('photo')}
            style={{
              padding: '10px 30px',
              background: filter === 'photo' ? 'var(--secondary-color)' : 'transparent',
              color: filter === 'photo' ? '#000' : 'var(--secondary-color)',
              border: '1px solid var(--secondary-color)',
              borderRadius: '25px',
              fontFamily: 'var(--font-heading)',
              fontWeight: 'bold',
              transition: 'all 0.3s ease'
            }}
          >
            Photos
          </button>
          <button 
            className={`filter-btn ${filter === 'video' ? 'active' : ''}`}
            onClick={() => setFilter('video')}
            style={{
              padding: '10px 30px',
              background: filter === 'video' ? 'var(--secondary-color)' : 'transparent',
              color: filter === 'video' ? '#000' : 'var(--secondary-color)',
              border: '1px solid var(--secondary-color)',
              borderRadius: '25px',
              fontFamily: 'var(--font-heading)',
              fontWeight: 'bold',
              transition: 'all 0.3s ease'
            }}
          >
            Videos
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', 
          gap: '1.5rem' 
        }}>
          {filteredItems.map(item => (
            <div 
              key={item.id} 
              className="gallery-item animate-fade-in"
              style={{
                position: 'relative',
                borderRadius: '8px',
                overflow: 'hidden',
                aspectRatio: '4/3',
                cursor: 'pointer',
                boxShadow: '0 5px 15px rgba(0,0,0,0.5)'
              }}
            >
              <img 
                src={item.url} 
                alt={item.title} 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease'
                }} 
                className="gallery-img"
              />
              <div className="gallery-item-overlay" style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(122,21,35,0.4) 50%, transparent 100%)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: '1.5rem',
                opacity: 0,
                transition: 'opacity 0.3s ease'
              }}>
                {item.type === 'video' && (
                  <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'rgba(230, 200, 117, 0.8)', borderRadius: '50%', padding: '15px', color: '#000' }}>
                    <Play size={32} fill="#000" />
                  </div>
                )}
                <h3 style={{ color: 'var(--secondary-color)', margin: 0, fontSize: '1.2rem', transform: 'translateY(20px)', transition: 'transform 0.3s ease' }} className="gallery-title">
                  {item.title}
                </h3>
                <p style={{ color: '#ccc', margin: '5px 0 0 0', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {item.type === 'video' ? 'Video' : 'Photo'}
                </p>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center" style={{ padding: '4rem', color: 'var(--text-muted)' }}>
            <h3>No items found in this category.</h3>
          </div>
        )}
      </section>

      <style dangerouslySetInnerHTML={{__html: `
        .gallery-item:hover .gallery-img {
          transform: scale(1.1);
        }
        .gallery-item:hover .gallery-item-overlay {
          opacity: 1;
        }
        .gallery-item:hover .gallery-title {
          transform: translateY(0);
        }
        .filter-btn:hover {
          box-shadow: 0 0 15px rgba(230, 200, 117, 0.4);
          transform: translateY(-2px);
        }
      `}} />
    </div>
  );
};

export default Gallery;
