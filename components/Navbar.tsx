'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from './Navbar.module.css';
import LoginModal from '@/app/loginmodal/LoginModal';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={`${styles.container} container`}>
          <Link href="/" className={styles.logo} onClick={() => setIsMenuOpen(false)}>
            Career<span className="gradient-text">Forge</span>
          </Link>

          {/* Desktop Links */}
          <ul className={`${styles.navLinks} ${isMenuOpen ? styles.navLinksActive : ''}`}>
            <li><Link href="/jobs" onClick={() => setIsMenuOpen(false)}>Job Portal</Link></li>
            <li><Link href="/prep" onClick={() => setIsMenuOpen(false)}>Preparation</Link></li>
            <li><Link href="/companies" onClick={() => setIsMenuOpen(false)}>Companies</Link></li>
            <li><Link href="/prep/dsa" className={styles.specialLink} onClick={() => setIsMenuOpen(false)}>DSA Sheet</Link></li>
            
            {/* Mobile Actions (inside the menu) */}
            <li className={styles.mobileActions}>
              <button className="btn btn-glass" onClick={() => { setIsModalOpen(true); setIsMenuOpen(false); }}>Login</button>
            </li>
          </ul>

          <div className={styles.actions}>
            <button className="btn btn-glass" onClick={() => setIsModalOpen(true)}>Login</button>
            <button className={styles.menuBtn} onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      <LoginModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
