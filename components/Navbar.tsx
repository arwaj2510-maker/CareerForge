'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from './Navbar.module.css';
import LoginModal from '../loginmodal/LoginModal';

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={`${styles.container} container`}>
          <Link href="/" className={styles.logo}>
            Career<span className="gradient-text">Forge</span>
          </Link>
          <ul className={styles.navLinks}>
            <li><Link href="/jobs">Job Portal</Link></li>
            <li><Link href="/prep">Preparation</Link></li>
            <li><Link href="/companies">Companies</Link></li>
            <li><Link href="/prep/dsa" className={styles.specialLink}>DSA Sheet</Link></li>
          </ul>
          <div className={styles.actions}>
            <button className="btn btn-glass" onClick={() => setIsModalOpen(true)}>Login</button>
            {/* <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>Join Now</button> */}
          </div>
        </div>
      </nav>

      <LoginModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
