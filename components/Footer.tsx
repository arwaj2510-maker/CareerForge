'use client';

import Link from 'next/link';
import styles from './Footer.module.css';
import { Github, Twitter, Linkedin, Mail, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.topSection}>
          <div className={styles.brandColumn}>
            <Link href="/" className={styles.logo}>
              Career<span className="gradient-text">Forge</span>
            </Link>
            <p className={styles.description}>
              The ultimate destination for software engineering aspirants to forge their 
              dream careers through curated jobs, DSA mastery, and interview prep.
            </p>
            <div className={styles.socials}>
              <a href="#" className={styles.socialLink} aria-label="Github"><Github size={20} /></a>
              <a href="#" className={styles.socialLink} aria-label="Twitter"><Twitter size={20} /></a>
              <a href="#" className={styles.socialLink} aria-label="Linkedin"><Linkedin size={20} /></a>
            </div>
          </div>

          <div className={styles.linkColumn}>
            <h3>Platform</h3>
            <ul>
              <li><Link href="/jobs">Job Portal</Link></li>
              <li><Link href="/prep/dsa">DSA Sheet</Link></li>
              <li><Link href="/prep">Interview Prep</Link></li>
              <li><Link href="/companies">Companies</Link></li>
            </ul>
          </div>

          <div className={styles.linkColumn}>
            <h3>Connect</h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Support</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>

          <div className={styles.newsletterColumn}>
            <h3>Stay Updated</h3>
            <p>Get the latest job alerts and prep materials delivered to your inbox.</p>
            <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email" required />
              <button type="submit" className="btn btn-primary">
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <p>&copy; {new Date().getFullYear()} CareerForge. Built with ❤️ for developers.</p>
          <div className={styles.bottomLinks}>
            <span>Global Engineering Platfrom</span>
            <div className={styles.dot}></div>
            <span>Status: Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
