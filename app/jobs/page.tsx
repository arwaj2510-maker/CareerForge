import Navbar from '../../components/Navbar';
import styles from './page.module.css';

export default function JobsPage() {
  const jobs = [
    { id: 1, title: "Frontend Engineer", company: "Meta", location: "Remote", salary: "$120k - $160k", tags: ["React", "TypeScript"] },
    { id: 2, title: "Backend Developer", company: "Google", location: "Mountain View, CA", salary: "$150k - $200k", tags: ["Go", "Distributed Systems"] },
    { id: 3, title: "Full Stack Engineer", company: "Stripe", location: "San Francisco, CA", salary: "$140k - $180k", tags: ["Node.js", "Ruby"] },
    { id: 4, title: "Software Engineer", company: "Netflix", location: "Los Gatos, CA", salary: "$180k+", tags: ["Java", "Cloud"] },
  ];

  return (
    <main>
      <Navbar />
      <section className={`${styles.jobsHero} section`}>
        <div className="container">
          <h1 className="gradient-text">Dream Tech Jobs</h1>
          <p className={styles.subtitle}>Discover open roles at the world's most innovative companies.</p>

          <div className={`glass ${styles.searchBar}`}>
            <input type="text" placeholder="Search roles, companies, or skills..." />
            <div className={styles.filters}>
              <span>All Locations</span>
              <span>All Salaries</span>
            </div>
            <button className="btn btn-primary">Search</button>
          </div>

          <div className={styles.jobsGrid}>
            {jobs.map(job => (
              <div key={job.id} className={`glass ${styles.jobCard}`}>
                <div className={styles.jobHeader}>
                  <div className={styles.companyIcon}>{job.company[0]}</div>
                  <div>
                    <h3>{job.title}</h3>
                    <p>{job.company}</p>
                  </div>
                </div>
                <div className={styles.jobBody}>
                  <p>📍 {job.location}</p>
                  <p>💰 {job.salary}</p>
                  <div className={styles.tagList}>
                    {job.tags.map(tag => <span key={tag} className={styles.tag}>{tag}</span>)}
                  </div>
                </div>
                <button className={`btn btn-glass ${styles.applyBtn}`}>Apply Now</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
