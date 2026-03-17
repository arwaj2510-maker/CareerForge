import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import styles from './page.module.css';

export default function Home() {
  return (
    <main>
      <Navbar />
      
      <div className="container">
        <Carousel />
      </div>

      {/* Hero Section */}
      <section className={`${styles.hero} section`}>
        <div className="container">
          <div className={styles.heroContent}>
            <span className={styles.badge}>New: 2026 Batch Hiring Live!</span>
            <h1 className={styles.title}>
              Forge Your Career in <br />
              <span className="gradient-text">Software Engineering</span>
            </h1>
            <p className={styles.description}>
              The all-in-one platform for job seekers. Explore thousands of jobs,
              master DSA, and crack company interviews with our curated prep resources.
            </p>
            <div className={styles.ctaGroup}>
              <button className="btn btn-primary">Browse Jobs</button>
              <button className="btn btn-glass">Start Prep</button>
            </div>
          </div>

          <div className={styles.heroStats}>
            <div className={`glass ${styles.statCard}`}>
              <h3>10k+</h3>
              <p>Active Jobs</p>
            </div>
            <div className={`glass ${styles.statCard}`}>
              <h3>500+</h3>
              <p>DSA Problems</p>
            </div>
            <div className={`glass ${styles.statCard}`}>
              <h3>50+</h3>
              <p>Companies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="section">
        <div className="container">
          <h2 className={styles.sectionTitle}>Four Pillars of Your <span className="gradient-text">Success</span></h2>
          <div className="grid-3">
            <div className={`glass ${styles.featureCard}`}>
              <div className={styles.iconWrapper}>💼</div>
              <h3>Job Portal</h3>
              <p>Find your dream role at top tech companies and startups. Filter by salary, role, and tech stack.</p>
            </div>
            <div className={`glass ${styles.featureCard}`}>
              <div className={styles.iconWrapper}>🧩</div>
              <h3>Preparation Hub</h3>
              <p>Comprehensive notes on Aptitude, HR, and Technical basics. Master the foundation of interviews.</p>
            </div>
            <div className={`glass ${styles.featureCard}`}>
              <div className={styles.iconWrapper}>⚡</div>
              <h3>DSA Ultimate</h3>
              <p>Topic-wise curated sheets. From Arrays to DP, track your progress and solve high-yield problems.</p>
            </div>
            <div className={`glass ${styles.featureCard}`}>
              <div className={styles.iconWrapper}>🏢</div>
              <h3>Company Insights</h3>
              <p>Exam patterns, syllabus, and eligibility for Amazon, Google, TCS, Infosys, and more.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
