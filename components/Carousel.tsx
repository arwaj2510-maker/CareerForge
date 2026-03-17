'use client';

import { useState, useEffect } from 'react';
import styles from './Carousel.module.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: '/images/slide1.png',
    title: 'Modern Workspaces',
    description: 'Forge your future in state-of-the-art tech environments.'
  },
  {
    id: 2,
    image: '/images/slide2.png',
    title: 'Futuristic Ecosystems',
    description: 'Master data structures in the world of tomorrow.'
  },
  {
    id: 3,
    image: '/images/slide3.png',
    title: 'Professional setups',
    description: 'The tools you need to crack any interview.'
  }
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.carouselContainer}>
      <div 
        className={styles.slideTrack} 
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className={styles.slide}>
            <img src={slide.image} alt={slide.title} className={styles.image} />
            <div className={styles.overlay}>
              <div className={styles.content}>
                <h2 className="gradient-text">{slide.title}</h2>
                <p>{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className={`${styles.navBtn} ${styles.prev}`} onClick={prevSlide}>
        <ChevronLeft size={24} />
      </button>
      <button className={`${styles.navBtn} ${styles.next}`} onClick={nextSlide}>
        <ChevronRight size={24} />
      </button>

      <div className={styles.indicators}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${current === index ? styles.active : ''}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
}
