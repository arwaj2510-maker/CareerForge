import Navbar from '@/components/Navbar';
import styles from './page.module.css';

export default function DSASheetPage() {
  const topics = [
    {
      name: "Arrays",
      problems: [
        { name: "Largest Element", diff: "Easy", link: "#" },
        { name: "Second Largest", diff: "Easy", link: "#" },
        { name: "Move Zeros", diff: "Medium", link: "#" },
        { name: "Maximum Subarray", diff: "Medium", link: "#" }
      ]
    },
    {
      name: "Linked List",
      problems: [
        { name: "Reverse LL", diff: "Easy", link: "#" },
        { name: "Middle of LL", diff: "Easy", link: "#" },
        { name: "Cycle Detection", diff: "Medium", link: "#" }
      ]
    },
    {
      name: "Recursion & Backtracking",
      problems: [
        { name: "N-Queens", diff: "Hard", link: "#" },
        { name: "Sudoku Solver", diff: "Hard", link: "#" },
        { name: "Permutations", diff: "Medium", link: "#" }
      ]
    }
  ];

  return (
    <main>
      <Navbar />
      <section className={`${styles.dsaHero} section`}>
        <div className="container">
          <div className={styles.header}>
            <h1 className="gradient-text">Ultimate DSA Sheet</h1>
            <p className={styles.subtitle}>A curated list of 180+ problems to master algorithms.</p>
          </div>

          <div className={styles.sheetContainer}>
            {topics.map((topic, i) => (
              <div key={i} className={styles.topicSection}>
                <h2 className={styles.topicTitle}>{topic.name}</h2>
                <div className={styles.problemsGrid}>
                  {topic.problems.map((prob, j) => (
                    <div key={j} className={`glass ${styles.problemCard}`}>
                      <div className={styles.probInfo}>
                        <span className={styles.status}>Pending</span>
                        <h3>{prob.name}</h3>
                      </div>
                      <div className={styles.probMeta}>
                        <span className={`${styles.diffBadge} ${styles[prob.diff.toLowerCase()]}`}>{prob.diff}</span>
                        <a href={prob.link} className={styles.solveLink}>Solve →</a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
