import Navbar from '../../pages/Navbar';
import styles from './page.module.css';

export default function CompaniesPage() {
  const companies = [
    {
      name: "Amazon",
      rounds: "4-5 Rounds",
      syllabus: "DSA, System Design, LPs",
      eligibility: "60% throughout",
      pattern: "OA + 3 Tech + 1 Bar Raiser"
    },
    {
      name: "TCS (Ninja/Digital)",
      rounds: "3 Rounds",
      syllabus: "Aptitude, Coding, TR/HR",
      eligibility: "6CGPA / 60%",
      pattern: "TCS iON NQT + TR + HR"
    },
    {
      name: "Google",
      rounds: "5-6 Rounds",
      syllabus: "Advanced DSA, Googlyness",
      eligibility: "No cut-off",
      pattern: "OA + 4 Tech + Googlyness"
    },
    {
      name: "Accenture",
      rounds: "2 Rounds",
      syllabus: "Cognitive, Technical, HR",
      eligibility: "6.5 CGPA",
      pattern: "Assessment + Interview"
    }
  ];

  return (
    <main>
      <Navbar />
      <section className={`${styles.companyHero} section`}>
        <div className="container">
          <h1 className="gradient-text">Company Hiring Processes</h1>
          <p className={styles.subtitle}>Detailed insights into the recruitment patterns of top tech firms.</p>

          <div className={styles.companyGrid}>
            {companies.map((comp, i) => (
              <div key={i} className={`glass ${styles.compCard}`}>
                <div className={styles.compHeader}>
                  <h2>{comp.name}</h2>
                  <span className={styles.badge}>{comp.rounds}</span>
                </div>

                <div className={styles.compDetails}>
                  <div className={styles.detailItem}>
                    <label>Exam Pattern</label>
                    <p>{comp.pattern}</p>
                  </div>
                  <div className={styles.detailItem}>
                    <label>Syllabus</label>
                    <p>{comp.syllabus}</p>
                  </div>
                  <div className={styles.detailItem}>
                    <label>Eligibility</label>
                    <p>{comp.eligibility}</p>
                  </div>
                </div>

                <button className="btn btn-glass">View Experiences</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
