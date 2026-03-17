import Navbar from '@/components/Navbar';
import styles from './page.module.css';

export default function PrepPage() {
  const categories = [
    { title: "Aptitude", desc: "Quantitative, Logical Reasoning, and Verbal Ability tests.", count: "120+ Problems", icon: "📊" },
    { title: "Technical", desc: "OS, DBMS, Networking, and OOPs conceptual notes.", count: "80+ Notes", icon: "💻" },
    { title: "DSA Prep", desc: "Master Data Structures and Algorithms with a 180-day plan.", count: "250+ Sheet", icon: "⚡" },
    { title: "HR Interview", desc: "Common behavioral questions and how to answer them.", count: "40+ QnA", icon: "🤝" },
  ];

  return (
    <main>
      {/* <Navbar /> */}
      <section className={`${styles.prepHero} section`}>
        <div className="container">
          <h1 className="gradient-text">Preparation Hub</h1>
          <p className={styles.subtitle}>All the resources you need to clear every interview round.</p>

          <div className="grid-3">
            {categories.map((cat, i) => (
              <div key={i} className={`glass ${styles.catCard}`}>
                <div className={styles.icon}>{cat.icon}</div>
                <h2>{cat.title}</h2>
                <p>{cat.desc}</p>
                <div className={styles.footer}>
                  <span className={styles.count}>{cat.count}</span>
                  <button className="btn btn-primary btn-sm">Start Learning</button>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.practiceSection}>
            <h2>Practice Problems of the Day</h2>
            <div className={styles.problemList}>
              <div className={`glass ${styles.problem}`}>
                <span>Two Sum</span>
                <span className={styles.difficulty}>Easy</span>
              </div>
              <div className={`glass ${styles.problem}`}>
                <span>Longest Palindromic Substring</span>
                <span className={styles.difficulty}>Medium</span>
              </div>
              <div className={`glass ${styles.problem}`}>
                <span>Merge K Sorted Lists</span>
                <span className={styles.difficulty}>Hard</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
